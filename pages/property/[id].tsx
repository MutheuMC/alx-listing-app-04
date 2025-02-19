import { useRouter } from "next/router";
import axios from "axios";
import { useState, useEffect } from "react";
import PropertyDetail from "@/components/property/PropertyDetail";
import BookingSection from "@/components/property/BookingSection";
import ReviewSection from "@/components/property/ReviewSection";

export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProperty = async () => {
      if (!id) return;
      try {
        const response = await axios.get(`/api/properties/${id}`);
        setProperty(response.data);
      } catch (error) {
        console.error("Error fetching property details:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading property details. Please try again later.</p>;
  }

  if (!property) {
    return <p>Property not found</p>;
  }

  return (
    <div className="container mx-auto p-6">
      <PropertyDetail property={property} />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2">
          <ReviewSection reviews={property.reviews} />
        </div>
        <div className="lg:col-span-1">
          <BookingSection
            price={property.price}
            propertyId={property.id}
            propertyName={property.name}
            propertyImage={property.image}
          />
        </div>
      </div>
    </div>
  );
}
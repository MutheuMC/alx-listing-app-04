import { PROPERTYLISTINGSAMPLE } from "@/constants";
import Image from "next/image";
import BookingForm from "@/components/booking/BookingForm";
import OrderSummary from "@/components/booking/OrderSummary";



const Index: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-400 to-purple-500 text-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Find Your Favorite Place Here!</h1>
          <p className="text-lg">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-6 bg-gray-100">
        <div className="container mx-auto flex flex-wrap gap-4 justify-center">
          {["Luxury Villa", "Beachfront", "Mountain View", "Pet Friendly"].map(
            (filter, index) => (
              <button
                key={index}
                className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition"
              >
                {filter}
              </button>
            )
          )}
        </div>
      </section>

      {/* Listing Section */}
      <section className="py-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROPERTYLISTINGSAMPLE.map((property, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <Image
                src={property.image}
                alt={property.name}
                width={500}
                height={300}
                className="w-full"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold">{property.name}</h2>
                <p className="text-sm text-gray-500">
                  {property.address.city}, {property.address.state},{" "}
                  {property.address.country}
                </p>
                <p className="text-lg font-semibold mt-2">
                  ${property.price} / night
                </p>
                <p className="text-sm text-gray-500">Rating: {property.rating}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;

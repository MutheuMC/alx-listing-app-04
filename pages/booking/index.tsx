import { useRouter } from "next/router";
import BookingForm from "@/components/booking/BookingForm";
import OrderSummary from "@/components/booking/OrderSummary";
import CancellationPolicy from "@/components/booking/CancellationPolicy";

export default function BookingPage() {
  const router = useRouter();
  const { id, propertyName, price, bookingFee, totalNights, startDate, propertyImage } = router.query;
  if (!id) return <p>Loading booking details...</p>;
  const bookingDetails = {
  propertyName: propertyName as string,
  price: Number(price),
  bookingFee: Number(bookingFee),
  totalNights: Number(totalNights),
  startDate: startDate as string,
  propertyImage: propertyImage as string,
  };

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-2 gap-6">
        <BookingForm />
        <OrderSummary bookingDetails={bookingDetails} />
        <CancellationPolicy />
      </div>
    </div>
  );
}

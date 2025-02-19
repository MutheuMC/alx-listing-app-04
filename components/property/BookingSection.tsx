import { useState } from "react";
import { useRouter } from "next/router";

const BookingSection: React.FC<{ price: number; propertyId: number; propertyName: string; propertyImage: string }> = ({ price, propertyId, propertyName, propertyImage }) => {
  const router = useRouter();
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const handleReserve = () => {
    if (!checkIn || !checkOut) return alert("Please select check-in and check-out dates.");

    const startDate = new Date(checkIn);
    const endDate = new Date(checkOut);
    const totalNights = Math.max(1, Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24)));
    const bookingFee = 65;

    router.push({
      pathname: "/booking",
      query: {
        id: propertyId,
        propertyName,
        price: price * totalNights,
        bookingFee,
        totalNights,
        startDate: checkIn,
        propertyImage, // Include image
      },
    });
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h3 className="text-xl font-semibold">${price}/night</h3>
      <div className="mt-4">
        <label>Check-in</label>
        <input type="date" className="border p-2 w-full mt-2" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} />
      </div>
      <div className="mt-4">
        <label>Check-out</label>
        <input type="date" className="border p-2 w-full mt-2" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} />
      </div>

      <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded-md" onClick={handleReserve}>
        Reserve now
      </button>
    </div>
  );
};

export default BookingSection;
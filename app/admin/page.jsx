'use client';
import React, { useEffect, useState } from "react";
import { supabase } from "@/utils/supabase";

function AdminDashboard() {
  const [bookings, setBookings] = useState([]);

  // Fetch bookings from Supabase when the component mounts
  useEffect(() => {
    fetchSupabaseData();
  }, []);

  const fetchSupabaseData = async () => {
    const { data, error } = await supabase.from("info").select("*");
    if (error) {
      console.error("Error fetching bookings:", error);
    } else {
      setBookings(data);
    }
  };

  // Function to update the status of a booking to "Confirmed" after a confirmation alert
  const handleConfirm = async (id) => {
    const userConfirmed = window.confirm(
      "Are you sure you want to confirm this booking?"
    );
    if (userConfirmed) {
      // Update the booking record in Supabase
      const { data, error } = await supabase
        .from("info")
        .update({ status: "Confirmed" })
        .eq("id", id);

      if (error) {
        console.error("Error updating booking status:", error);
      } else {
        // Update the local state so the UI reflects the change
        setBookings((prevBookings) =>
          prevBookings.map((booking) =>
            booking.id === id ? { ...booking, status: "Confirmed" } : booking
          )
        );
      }
    } else {
      // If the user cancels, you can optionally show an alert or simply do nothing
      // For example:
      // window.alert("Booking remains pending.");
    }
  };

  return (
    <div className="p-8 font-sans">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <h2 className="text-2xl font-semibold mb-4">Bookings</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 border">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Phone
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Special Request
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {bookings.map((booking) => (
              <tr key={booking.id}>
                <td className="px-6 py-4 whitespace-nowrap">{booking.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{booking.phone}</td>
                <td className="px-6 py-4 whitespace-nowrap">{booking.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">{booking.special_req}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {booking.status === "Pending" ? (
                    <button
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                      onClick={() => handleConfirm(booking.id)}
                    >
                      Confirm
                    </button>
                  ) : (
                    <span className="text-green-600 font-semibold">Confirmed</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminDashboard;

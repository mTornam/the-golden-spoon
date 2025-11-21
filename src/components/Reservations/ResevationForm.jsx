import React, { useState } from "react";

const ResevationForm = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const today = new Date().toISOString().split("T")[0];
  const futureTime = new Date();

  futureTime.setMinutes(futureTime.getMinutes() + 45);
  const minTime = futureTime.toTimeString().slice(0, 5);
  

  return (
    <form id="reservation-form" className="space-y-6">
      <div>
        <label className="block text-xs uppercase tracking-widest text-gray-500 mb-1">
          Name
        </label>
        <input
          type="text"
          className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-spoon-gold transition-colors bg-transparent"
          placeholder="John Doe"
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-xs uppercase tracking-widest text-gray-500 mb-1">
            Phone
          </label>
          <input
            type="tel"
            className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-spoon-gold transition-colors bg-transparent"
            placeholder="+233..."
            required
          />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-widest text-gray-500 mb-1">
            Guests
          </label>
          <input
            type="number"
            min="1"
            max="20"
            className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-spoon-gold transition-colors bg-transparent"
            placeholder="2"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-xs uppercase tracking-widest text-gray-500 mb-1">
            Date
          </label>
          <input
            type="date"
            min={today}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-spoon-gold transition-colors bg-transparent"
            required
          />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-widest text-gray-500 mb-1">
            Time
          </label>
          <input
            type="time"
            disabled={!selectedDate}
            min={selectedDate === today ? minTime : null}
            className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-spoon-gold transition-colors bg-transparent"
            required
          />
        </div>
      </div>

      <div className="pt-4">
        <button
          type="submit"
          className="w-full bg-spoon-gold text-white font-bold uppercase tracking-widest py-4 hover:bg-yellow-600 transition-colors shadow-md"
        >
          Book Table
        </button>
      </div>
      <div
        id="form-feedback"
        className="hidden text-center text-green-600 text-sm pt-2"
      >
        Reservation Request Sent! We will confirm shortly.
      </div>
    </form>
  );
};

export default ResevationForm;

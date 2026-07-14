import React, { useState } from "react";

const ResevationForm = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState({ message: "", type: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const today = new Date().toISOString().split("T")[0];
  const openingTime = "11:00";
  const closingTime = "22:00";
  const minimumReservationWindowMinutes = 90;
  const futureTime = new Date();

  futureTime.setMinutes(futureTime.getMinutes() + 45);
  const minTime = futureTime.toTimeString().slice(0, 5);
  const fieldClassName =
    "w-full border-b border-gray-300 py-2 focus:outline-none focus:border-spoon-gold transition-colors bg-transparent text-gray-700 placeholder-gray-400";

  const formatPhoneNumber = (value) => {
    const digits = value.replace(/\D/g, "").slice(0, 10);

    if (!digits) return "";
    if (digits.length <= 3) return digits;
    if (digits.length <= 6) return `${digits.slice(0, 3)} ${digits.slice(3)}`;
    return `${digits.slice(0, 3)} ${digits.slice(3, 6)} ${digits.slice(6)}`;
  };

  const validatePhoneNumber = (value) => {
    const digits = value.replace(/\D/g, "");
    return /^0(20|24|26|27|50|54|55|56|57|59)\d{7}$/.test(digits);
  };

  const toMinutes = (time) => {
    const [hours, minutes] = time.split(":").map(Number);
    return hours * 60 + minutes;
  };

  const isTimeWithinOperatingHours = (time) => {
    const selectedMinutes = toMinutes(time);
    const openingMinutes = toMinutes(openingTime);
    const closingMinutes = toMinutes(closingTime);
    return selectedMinutes >= openingMinutes && selectedMinutes <= closingMinutes;
  };

  const isTimeValidForReservation = (time) => {
    if (!isTimeWithinOperatingHours(time)) return false;

    const selectedMinutes = toMinutes(time);
    const closingMinutes = toMinutes(closingTime);
    return closingMinutes - selectedMinutes >= minimumReservationWindowMinutes;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedEmail = email.trim();
    const trimmedPhone = phone.trim();

    if (!trimmedPhone && !trimmedEmail) {
      setFeedback({
        message: "Please provide either a phone number or an email address.",
        type: "error",
      });
      return;
    }

    if (trimmedPhone && !validatePhoneNumber(trimmedPhone)) {
      setFeedback({
        message:
          "Please enter a valid Ghanaian phone number starting with 0 and using a supported network prefix.",
        type: "error",
      });
      return;
    }

    if (trimmedEmail && !/\S+@\S+\.\S+/.test(trimmedEmail)) {
      setFeedback({
        message: "Please enter a valid email address.",
        type: "error",
      });
      return;
    }

    if (selectedTime && !isTimeValidForReservation(selectedTime)) {
      setFeedback({
        message:
          "Reservations must be made at least 1 hour 30 minutes before closing time and within our operating hours.",
        type: "error",
      });
      return;
    }

    setFeedback({
      message: "Reservation request received. We will confirm shortly.",
      type: "success",
    });
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="rounded-2xl border border-spoon-gold/30 bg-white/90 p-8 text-center shadow-lg">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-spoon-gold">
          Reservation Received
        </p>
        <h3 className="mb-3 font-serif text-2xl text-spoon-charcoal">
          Thank You for Choosing Golden Bowl
        </h3>
        <p className="mb-6 text-sm leading-7 text-gray-600">
          We’ve received your reservation request and will confirm it shortly.
          Please keep an eye on your phone or email for the confirmation message.
        </p>
        <button
          type="button"
          onClick={() => setIsSubmitted(false)}
          className="rounded-full border border-spoon-gold px-6 py-3 text-sm font-semibold uppercase tracking-widest text-spoon-gold transition hover:bg-spoon-gold hover:text-white"
        >
          Make Another Reservation
        </button>
      </div>
    );
  }

  return (
    <form id="reservation-form" className="space-y-6" onSubmit={handleSubmit}>
      <div
        id="form-feedback"
        className={`text-center text-sm pb-3 ${
          feedback.type === "success"
            ? "text-green-600"
            : feedback.type === "error"
            ? "text-red-600"
            : "hidden"
        }`}
      >
        {feedback.message}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="block text-xs uppercase tracking-widest text-gray-500 mb-1">
            Name
          </label>
          <input
            type="text"
            className={fieldClassName}
            placeholder="John Doe"
            required
          />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-widest text-gray-500 mb-1">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (feedback.message) setFeedback({ message: "", type: "" });
            }}
            className={fieldClassName}
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="block text-xs uppercase tracking-widest text-gray-500 mb-1">
            Phone
          </label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => {
              setPhone(formatPhoneNumber(e.target.value));
              if (feedback.message) setFeedback({ message: "", type: "" });
            }}
            className={fieldClassName}
            placeholder="024 123 4567"
            maxLength={12}
          />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-widest text-gray-500 mb-1">
            Guests
          </label>
          <select className={`${fieldClassName} appearance-none`} required defaultValue="">
            <option value="" disabled>
              Select party size
            </option>
            <option value="2">2 Guests</option>
            <option value="4">4 Guests</option>
            <option value="6">6 Guests</option>
            <option value="8">8 Guests</option>
            <option value="10-15">10 - 15 Guests</option>
            <option value="15+">Full Party (15+ Guests)</option>
          </select>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="block text-xs uppercase tracking-widest text-gray-500 mb-1">
            Date
          </label>
          <input
            type="date"
            min={today}
            onChange={(e) => setSelectedDate(e.target.value)}
            className={fieldClassName}
            required
          />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-widest text-gray-500 mb-1">
            Time
          </label>
          <input
            type="time"
            value={selectedTime}
            onChange={(e) => {
              setSelectedTime(e.target.value);
              if (feedback.message) setFeedback({ message: "", type: "" });
            }}
            disabled={!selectedDate}
            min={selectedDate === today ? minTime : openingTime}
            max={closingTime}
            className={fieldClassName}
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
    </form>
  );
};

export default ResevationForm;

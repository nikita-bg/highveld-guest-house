"use client"

import { useState } from "react"
import {
  CalendarDays,
  Users,
  Send,
} from "lucide-react"

export function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: "2",
    roomType: "",
    message: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = `Hello, I'd like to make a reservation at Highveld Guest House.\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCheck-in: ${formData.checkIn}\nCheck-out: ${formData.checkOut}\nGuests: ${formData.guests}\nRoom: ${formData.roomType}\nMessage: ${formData.message}`
    window.open(
      `https://wa.me/27600000000?text=${encodeURIComponent(message)}`,
      "_blank"
    )
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-6">
      {/* Name & Email */}
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block font-body text-[10px] uppercase tracking-[0.3em] text-[#2A1A0E]/50"
          >
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full border-b border-[#2A1A0E]/20 bg-transparent pb-2 font-body text-sm text-[#2A1A0E] outline-none transition-colors focus:border-[#C4622D]"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-2 block font-body text-[10px] uppercase tracking-[0.3em] text-[#2A1A0E]/50"
          >
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full border-b border-[#2A1A0E]/20 bg-transparent pb-2 font-body text-sm text-[#2A1A0E] outline-none transition-colors focus:border-[#C4622D]"
          />
        </div>
      </div>

      {/* Phone */}
      <div>
        <label
          htmlFor="phone"
          className="mb-2 block font-body text-[10px] uppercase tracking-[0.3em] text-[#2A1A0E]/50"
        >
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full border-b border-[#2A1A0E]/20 bg-transparent pb-2 font-body text-sm text-[#2A1A0E] outline-none transition-colors focus:border-[#C4622D]"
        />
      </div>

      {/* Dates & Guests */}
      <div className="grid gap-6 sm:grid-cols-3">
        <div>
          <label
            htmlFor="checkIn"
            className="mb-2 block font-body text-[10px] uppercase tracking-[0.3em] text-[#2A1A0E]/50"
          >
            Check In *
          </label>
          <div className="flex items-center gap-2 border-b border-[#2A1A0E]/20 pb-2">
            <CalendarDays className="h-4 w-4 shrink-0 text-[#C4622D]" />
            <input
              type="date"
              id="checkIn"
              name="checkIn"
              required
              value={formData.checkIn}
              onChange={handleChange}
              className="w-full bg-transparent font-body text-sm text-[#2A1A0E] outline-none"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="checkOut"
            className="mb-2 block font-body text-[10px] uppercase tracking-[0.3em] text-[#2A1A0E]/50"
          >
            Check Out *
          </label>
          <div className="flex items-center gap-2 border-b border-[#2A1A0E]/20 pb-2">
            <CalendarDays className="h-4 w-4 shrink-0 text-[#C4622D]" />
            <input
              type="date"
              id="checkOut"
              name="checkOut"
              required
              value={formData.checkOut}
              onChange={handleChange}
              className="w-full bg-transparent font-body text-sm text-[#2A1A0E] outline-none"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="guests"
            className="mb-2 block font-body text-[10px] uppercase tracking-[0.3em] text-[#2A1A0E]/50"
          >
            Guests
          </label>
          <div className="flex items-center gap-2 border-b border-[#2A1A0E]/20 pb-2">
            <Users className="h-4 w-4 shrink-0 text-[#C4622D]" />
            <select
              id="guests"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              className="w-full bg-transparent font-body text-sm text-[#2A1A0E] outline-none"
            >
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
            </select>
          </div>
        </div>
      </div>

      {/* Room Type */}
      <div>
        <label
          htmlFor="roomType"
          className="mb-2 block font-body text-[10px] uppercase tracking-[0.3em] text-[#2A1A0E]/50"
        >
          Preferred Room
        </label>
        <select
          id="roomType"
          name="roomType"
          value={formData.roomType}
          onChange={handleChange}
          className="w-full border-b border-[#2A1A0E]/20 bg-transparent pb-2 font-body text-sm text-[#2A1A0E] outline-none transition-colors focus:border-[#C4622D]"
        >
          <option value="">Select a room type</option>
          <option value="standard">Standard Room - from R650/night</option>
          <option value="deluxe">Deluxe Room - from R950/night</option>
          <option value="family">Family Suite - from R1,400/night</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="mb-2 block font-body text-[10px] uppercase tracking-[0.3em] text-[#2A1A0E]/50"
        >
          Message / Special Requests
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Dietary requirements, late check-in, extra beds..."
          className="w-full resize-none border-b border-[#2A1A0E]/20 bg-transparent pb-2 font-body text-sm text-[#2A1A0E] outline-none transition-colors placeholder:text-[#2A1A0E]/30 focus:border-[#C4622D]"
        />
      </div>

      <button
        type="submit"
        className="mt-4 flex w-full items-center justify-center gap-3 bg-[#C4622D] py-4 font-body text-xs uppercase tracking-[0.2em] text-[#FAF3EC] transition-all duration-300 hover:bg-[#A85225] sm:w-auto sm:px-12"
      >
        <Send className="h-3.5 w-3.5" />
        Send Reservation Request
      </button>
    </form>
  )
}

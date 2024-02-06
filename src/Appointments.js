// import React from 'react';
import "./Appointment.css";
import React, { useState } from "react";

const Appointments = () => {
  const [isBooked, setIsBooked] = useState(false);

  const handleBooking = (e) => {
    e.preventDefault();
    // Add any booking logic or API calls here
    setIsBooked(true);
  };

  return (
    <div className="container-fluid py-5" id="vakavaka">
      <div className="container" id="containerappointment">
        <div className="flex flex-col lg:flex-row items-center lg:justify-between lg:space-x-8">
          <div className="mb-8 lg:mb-0 lg:w-1/2">
            <div className="mb-4">
              <h5 className="text-primary text-uppercase text-8xl">
                Appointment
              </h5>
              <h1 className="text-4xl font-bold my-11">
                Make An Appointment For Your Family
              </h1>
            </div>
            <p className="mb-5">
              Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd
              ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo
              rebum sea invidunt voluptua. Eos vero eos vero ea et dolore eirmod
              et. Dolores diam duo invidunt lorem. Elitr ut dolores magna sit.
              Sea dolore sanctus sed et. Takimata takimata sanctus sed.
            </p>
            <button id="button">Read More</button>
          </div>
          <div
            className={`bg-light text-center rounded p-5 lg:w-1/2 ${
              isBooked ? "booked" : ""
            }`}
          >
            {isBooked ? (
              <button id="button">Appointment booked!</button>
            ) : (
              <>
                <h1 className="mb-11 text-6xl font-bold mr-40">
                  Book An Appointment
                </h1>
                <form
                  onSubmit={handleBooking}
                  className="grid grid-cols-1 gap-4 sm:grid-cols-2"
                >
                  <select
                    className="form-select bg-white border-0 h-14"
                    required
                  >
                    <option defaultValue>Choose Department</option>
                    <option value="1">Department 1</option>
                    <option value="2">Department 2</option>
                    <option value="3">Department 3</option>
                  </select>
                  <select
                    className="form-select bg-white border-0 h-14"
                    required
                  >
                    <option defaultValue>Select Doctor</option>
                    <option value="1">Doctor 1</option>
                    <option value="2">Doctor 2</option>
                    <option value="3">Doctor 3</option>
                  </select>
                  <input
                    type="text"
                    className="form-control bg-white border-0 h-14"
                    placeholder="Your Name"
                    required
                  />
                  <input
                    type="email"
                    className="form-control bg-white border-0 h-14"
                    placeholder="Your Email"
                    required
                  />
                  <div className="date" id="date" data-target-input="nearest">
                    <input
                      type="text"
                      className="form-control bg-white border-0 datetimepicker-input h-14"
                      placeholder="Date"
                      data-target="#date"
                      data-toggle="datetimepicker"
                      required
                    />
                  </div>
                  <div className="time" id="time" data-target-input="nearest">
                    <input
                      type="text"
                      className="form-control bg-white border-0 datetimepicker-input h-14"
                      placeholder="Time"
                      data-target="#time"
                      data-toggle="datetimepicker"
                      required
                    />
                  </div>
                  <button
                    id="button1"
                    className="ml-20"
                    type="submit"
                    width="5rem"
                  >
                    Make An Appointment
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointments;

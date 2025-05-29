"use client";

import React, { useRef } from "react";

const EmailSection = () => {
  const formRef = useRef(null);
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbx1gAWHRxh0TCAirRFIUZifl3K9NNR0NSMXnd12vEWbpNiBL2hRym6RNgScS8pVJD79/exec";

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: new FormData(formRef.current),
      });

      if (response.ok) {
        console.log("Success!", response);
        formRef.current.reset();
      } else {
        console.error("Submission failed:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting form:", error.message);
    }
  };

  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 my-12 md:my-12 py-24 gap-8 px-4 max-w-7xl mx-auto"
      id="contact"
    >
      <div>
        <h5 className="text-xl font-bold text-white my-2">Lets Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I am currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I will try my best
          to get back to you.
        </p>
      </div>
      <div>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
          name="submit-to-google-sheet"
        >
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="Your email"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-sm rounded-lg w-full p-2.5"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block mb-2 text-sm font-medium"
            >
              Subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              required
              placeholder="Subject"
              className="bg-[#18191E] border text-white border-[#33353F] placeholder-[#9CA2A9] text-sm rounded-lg w-full p-2.5"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block mb-2 text-sm font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              required
              className="bg-[#18191E] text-white border border-[#33353F] placeholder-[#9CA2A9] text-sm rounded-lg w-full p-2.5 h-52"
              placeholder="Message"
            />
          </div>
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;

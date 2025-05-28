/* eslint-disable react/no-unescaped-entities */
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
    <section className="grid md:grid-cols-2 gap-8 py-16 px-4 sm:px-8 lg:px-16 text-white">
      <div>
        <h5 className="text-2xl font-bold mb-4">Let's Connect</h5>
        <p className="text-[#ADB7BE] max-w-md">
          I'm currently looking for new opportunities, and my inbox is always
          open. Whether you have a question or just want to say hi, I’ll do my
          best to get back to you.
        </p>
      </div>

      <div>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          name="submit-to-google-sheet"
          className="flex flex-col gap-6"
        >
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="your email"
              className="w-full bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-sm rounded-lg p-3"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block mb-2 text-sm font-medium">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              required
              placeholder="Subject"
              className="w-full bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-sm rounded-lg p-3"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              required
              placeholder="Message"
              className="w-full bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-sm rounded-lg p-3 h-40 resize-none"
            />
          </div>

          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 transition-colors duration-300 text-white font-medium py-3 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;

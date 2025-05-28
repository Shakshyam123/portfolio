/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useRef } from "react";

const EmailSection = () => {
  const formRef = useRef(null);
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbx1gAWHRxh0TCAirRFIUZifl3K9NNR0NSMXnd12vEWbpNiBL2hRym6RNgScS8pVJD79/exec"; // Replace this with your script URL

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: new FormData(formRef.current),
      });

      if (response.ok) {
        console.log("Success!", response);
        formRef.current.reset(); // Clear form on success
      } else {
        console.error("Submission failed:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting form:", error.message);
    }
  };

  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4">
      <div>
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I'm currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I will try my best
          to get back to you.
        </p>
      </div>
      <div>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 ml-11"
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
              placeholder="your email"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-sm rounded-lg block w-96 p-2.5"
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
              className="bg-[#18191E] border text-white border-[#33353F] placeholder-[#9CA2A9] text-sm rounded-lg block w-96 p-2.5"
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
              className="bg-[#18191E] text-white border border-[#33353F] placeholder-[#9CA2A9] text-sm rounded-lg block w-96 p-2.5 h-52"
              placeholder="Message"
            />
          </div>
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-96"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;

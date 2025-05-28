/* eslint-disable react/no-unescaped-entities */
import React from "react";

const EmailSection = () => {
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4">
      <div>
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I'm currently looking for new opportunities, my inbox is always open.
          Whetheryou have a question or just wantto say hi, I will try my best
          to get back to you.
        </p>
      </div>
      <div>
        <form className="flex flex-col gap-4 ml-11  ">
          <div className="mb-6">
            <label
              htmlFor="email"
              type="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              required
              placeholder="your name"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-sm rounded-lg block w-96 p-2.5"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="text"
              type="text"
              className="text-white block mb-2 text-sm font-medium"
            >
              Subject
            </label>
            <input
              type="text"
              id="text"
              required
              placeholder="Subject"
              className="bg-[#18191E] border text-white border-[#33353F] placeholder-[#9CA2A9] text-sm rounded-lg block w-96 p-2.5"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-smmb-2 font-medium"
            >
              {" "}
              Message
            </label>
            <textarea
              name="message"
              id="message"
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

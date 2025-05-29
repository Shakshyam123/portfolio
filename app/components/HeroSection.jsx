"use client";

import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

function HeroSection() {
  return (
    <section className="py-10 px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-8">
        {/* Text Section */}
        <div className="md:col-span-7 text-center md:text-left">
          <h1 className="text-white mb-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-500 via-purple-500 to-black">
              Hello I am <br />
            </span>
            <TypeAnimation
              sequence={[
                "Shakshyam",
                1000,
                "Web Developer",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              className="inline-block"
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] mb-8 text-base sm:text-lg max-w-xl mx-auto md:mx-0">
            Greetings of the day! I am Shakshyam Bohara, a web developer. I’ve
            worked on many small projects and some big ones too. I have about 6
            months of experience, and developing websites is my passion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start">
            <a
              className="px-6 py-3 bg-white rounded-full text-black hover:bg-slate-200 text-center w-full sm:w-auto"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=boharashakshyam@gmail.com&su=Hiring%20for"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email Me
            </a>
            <a
              href="Shakshyam-Bohara-cv(4).pdf"
              className="px-6 py-3 border border-white text-white rounded-full hover:bg-slate-800 text-center w-full sm:w-auto"
              download
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:col-span-5 flex justify-center">
          <div className="relative group w-64 h-64 sm:w-72 sm:h-72 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-purple-700 via-blue-600 to-indigo-700 shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <div className="absolute inset-1 rounded-full bg-[#181818] overflow-hidden">
              <Image
                src="/Shakshyam.png"
                alt="Shakshyam"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

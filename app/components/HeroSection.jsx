"use client";

import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

function HeroSection() {
  return (
    <section>
      <div className="grid grod-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-500 via-purple-500 to-black">
              {" "}
              Hello I am <br />
            </span>
            <TypeAnimation
              sequence={[
                "Shakshyam",
                1000,
                "Webdeveloper",
                1000,
                "Ui/Ux designer",
                1000,
              ]}
              Wrapper="span"
              speed={10}
              style={{ fontSize: "em", display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE]  mb-6 text-base sm:text-base sm:w-auto lg:text-xl">
            Greeting of the day!! I am Shakshyam Bohara, a web developer.I have
            many worked on many small projects and some big projects, about 6
            months experience in relevant filed. Developing websites is my
            passion.
          </p>
          <div>
            <button className="px-6 py-3 mr-4 bg-white w-full sm:w-auto rounded-full text-black hover:bg-slate-200">
              {/* bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 */}
              Hire me
            </button>
            <a
              href="Shakshyam-Bohara-cv.pdf"
              className="px-6 py-3 bg-transparent w-full sm:w-auto border border-white text-white rounded-full hover:bg-slate-800 mt-3"
            >
              Downoload CV
            </a>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[500px] h-[500px] lg:w-[400px] lg-h-[400px] relative">
            <Image
              src="/Shakshyam.png"
              alt="student"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

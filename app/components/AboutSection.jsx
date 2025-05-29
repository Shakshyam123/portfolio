"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useTransition } from "react";
import TabButton from "./TabButton";

const AboutSection = () => {
  const TAB_DATA = [
    {
      title: "skills",
      id: "skills",
      content: (
        <ul className="list-disc list-inside">
          <li>Mysql</li>
          <li>Javascript</li>
          <li>express</li>
          <li>Reactjs</li>
          <li>Nextjs</li>
          <li>Tailwind css</li>
          <li>Html Css</li>
          <li>Git/Github</li>
        </ul>
      ),
    },
    {
      title: "education",
      id: "education",
      content: (
        <ul className="list-disc list-inside">
          <li>College of Baylor International Academy</li>
        </ul>
      ),
    },
  ];

  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white px-4 py-12 md:py-20" id="about">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-7xl mx-auto">
        <Image
          alt="computer"
          src="/computer.avif"
          width={500}
          height={500}
          className="rounded-lg w-full h-auto object-cover"
        />
        <div className="text-left flex flex-col">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-[#ADB7BE]">
            Greetings! I am Shakshyam Bohara, a passionate web developer with
            experience working on various small and large projects. With about 6
            months of hands-on experience, I bring creativity and functionality
            to every project. Developing websites is not just my profession, its
            my passion.
          </p>
          <div className="flex flex-row mt-8 space-x-4">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

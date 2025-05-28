"use client";

import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const AboutSection = () => {
  const TAB_DATA = [
    {
      title: "skills",
      id: "skills",
      content: (
        <ul className="list-disc pl-5 space-y-1">
          <li>MySQL</li>
          <li>JavaScript</li>
          <li>Express</li>
          <li>React.js</li>
          <li>Next.js</li>
          <li>Tailwind CSS</li>
          <li>HTML & CSS</li>
          <li>Git / GitHub</li>
        </ul>
      ),
    },
    {
      title: "education",
      id: "education",
      content: (
        <ul className="list-disc pl-5 space-y-1">
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
    <section className="text-white px-4 sm:px-8 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <Image
          alt="computer"
          src="/computer.avif"
          width={500}
          height={500}
          className="rounded-lg object-cover w-full h-auto"
        />

        <div className="text-left flex flex-col h-full">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-base leading-relaxed">
            Greetings of the day! I am Shakshyam Bohara, a web developer. I’ve
            worked on many small and a few big projects, and have around 6
            months of experience in the relevant field. Developing websites is
            my passion.
          </p>

          <div className="flex space-x-4 mt-8">
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

          <div className="mt-6">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

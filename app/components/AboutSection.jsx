"use client";

import React, { startTransition } from "react";
import Image from "next/image";
import { useState } from "react";
import { useTransition } from "react";
import TabButton from "./TabButton";

const AboutSection = () => {
  const TAB_DATA = [
    {
      title: "skills",
      id: "skills",
      content: (
        <ul>
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
        <ul>
          <li>Collage of Baylor international academy</li>
        </ul>
      ),
    },
  ];
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  console.log(tab);

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image alt="computer" src="/computer.avif" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2>About me</h2>
          <p>
            Greeting of the day!! I am Shakshyam Bohara, a web developer.I have
            many worked on many. small projects and some big projects, about 6
            months experience in relevant field. Delevoping websites is my
            passion.
          </p>
          <div className="flex flex-row mt-8">
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
            {TAB_DATA.find((t) => t.id == tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

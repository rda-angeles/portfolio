"use client";

import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Me from "/public/images/me.jpg";
import { Button } from "./ui/button";
const Typewriter = dynamic(() => import("typewriter-effect"), { ssr: false });

const Landing = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Angeles_CV.pdf";
    link.download = "Angeles_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="flex flex-col-reverse items-center justify-center gap-x-5 lg:flex-row">
      <div className="w-full mt-10 lg:mt-0">
        <h1 className="text-5xl sm:text-7xl">Hi, I&apos;m Nik!</h1>
        <p className="lg:text-lg">
          I am a <span className="font-bold">Frontend Developer</span> dedicated
          to creating exceptional web experiences who also loves{" "}
          <span className="inline-block text-md font-bold text-primary-accent lg:text-xl">
            <Typewriter
              options={{
                strings: ["Coffee.", "Eating.", "Sleeping."],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </p>

        <Button variant="default" onClick={handleDownload}>
          Download CV
        </Button>
      </div>

      <div className="group">
        <Image
          src={Me}
          alt="It's RDA"
          priority
          width={250}
          height={250}
          className="aspect-square object-cover rounded-lg transition-transform duration-700 ease-out cursor-pointer group-hover:scale-110 lg:w-[290px]"
        />
      </div>
    </section>
  );
};

export default Landing;

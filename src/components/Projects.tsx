"use client";
import React from "react";
import { projects } from "@/constants/projects";

import { HoverEffect } from "./ui/project-card-hover-effect";

const Projects = () => {
  return (
    <section className="mt-10" id="projects">
      <div>
        <h1 className="title flex items-center gap-x-3">
          Projects
          <span className="circle mt-3"></span>
        </h1>

        <div className="mt-5 w-full">
          <HoverEffect items={projects} />
        </div>
      </div>
    </section>
  );
};

export default Projects;

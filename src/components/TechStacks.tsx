import React from "react";

import { techStacks } from "@/constants/technologyStacks";
const TechStacks = () => {
  return (
    <section className="mt-10" id="techStacks">
      <div className="lg:flex lg:gap-x-20">
        <h1 className="title flex gap-x-3">
          Technology Stacks
          <span className="circle mt-5"></span>
        </h1>

        <div className="mt-8 lg:grow lg:mt-0">
          {techStacks.map((stacks, index) => (
            <div
              key={index}
              className="w-full px-2 flex items-center gap-x-12 border border-x-0 border-b-foreground/30 transition duration-300 ease-in-out first:border-t-foreground/30 hover:bg-primary-foreground"
            >
              {String(index + 1).padStart(2, "0")}
              <div className="flex items-center justify-center gap-x-4">
                <stacks.icon className="w-[30px] h-full" />
                <p>{stacks.stack}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStacks;

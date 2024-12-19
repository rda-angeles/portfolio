import React from "react";
import { projects } from "@/constants/projects";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import Image from "next/image";

const Projects = () => {
  return (
    <section className="mt-10">
      <div>
        <h1 className="title">Projects</h1>

        <div className="mt-5 grid gap-7 w-full grid-cols-1 place-items-center md:grid-cols-2">
          {projects.map((project, index) => (
            <Card key={index} className="w-full max-w-md h-full flex flex-col justify-between">
              <CardHeader>
                <Image
                  src={project.img}
                  alt={project.projName}
                  className="w-full object-cover aspect-video"
                />
                <CardTitle className="text-xl">{project.projName}</CardTitle>
                <div className="flex items-center justify-start flex-wrap gap-3">
                  {project.techStack.map((stack) => (
                    <Badge key={stack} className="w-[80px]">
                      {stack}
                    </Badge>
                  ))}
                </div>
              </CardHeader>

              <CardContent className="text-sm">{project.desc}</CardContent>
              <CardFooter className="flex items-center gap-x-3">
                {project.github && (
                  <Link href={project.github}>
                    <GitHubLogoIcon width="20" height="20" />
                  </Link>
                )}
                <Button variant="outline">
                  <Link href={project.site}>View website</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

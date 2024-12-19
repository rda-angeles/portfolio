import React from "react";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const Footer = () => {
  const socials = [
    {
      url: "https://github.com/rda-angeles",
      icon: GitHubLogoIcon,
    },
    {
      url: "https://www.linkedin.com/in/rae-dominique-angeles-332122201/",
      icon: LinkedInLogoIcon,
    },
  ];
  return (
    <footer className="py-8">
      <div className="container max-w-3xl">
        <div className="md:flex md:items-center md:justify-between text-muted-foreground">
          <div className="flex justify-center space-x-6 md:order-2">
            {socials.map((social, index) => (
              <Link href={social.url} key={index}>
                <social.icon width={20} height={20} />
              </Link>
            ))}
          </div>
          <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-center text-xs-leading-5 py-0">
              &copy; {new Date().getFullYear()} RDAngeles. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

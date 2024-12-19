import Link from "next/link";
import React from "react";
import HackerRankCertificate from "/public/images/certifications/hackerrank-fe-react.png";
import Image from "next/image";

const Bio = () => {
  return (
    <section className="mt-10">
      <h1 className="title flex items-center gap-x-3">
        Bio
        <span className="circle mt-3"></span>
      </h1>
      <div>
        <p>
          I am a graduate of Computer Science with{" "}
          {new Date().getFullYear() - 2020} years of experience working as a
          Front-End Developer in the industry where I have gained and enhanced
          my skills in developing user interfaces, testing, debugging, and
          optimizing web functionalities.
        </p>

        <p>
          I am passionate in programming, always aiming for career advancement
          and professional development, hard-working in nature, great team
          player, I have an enthuasiastic demeanour and commitment to the things
          I am assigned to do. I am always willing and keen to learn more so I
          can continue to improve my skills, not only technical but also
          interpersonal.
        </p>

        <div>
          <h3 className="text-2xl">Certification/s</h3>
          <ul>
            <li className="list-disc list-inside mt-4">
              <Link href="https://www.hackerrank.com/certificates/67a4f63c6672">
                HackerRank | Frontend Developer (React) Certificate
              </Link>

              <Image
                className="object-cover rounded-lg mt-4"
                src={HackerRankCertificate}
                width={450}
                height={450}
                alt="HackerRank | Frontend Developer (React) Certificate"
              />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Bio;

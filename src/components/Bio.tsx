import React from "react";

const Bio = () => {
  return (
    <section className="mt-10">
      <h1 className="title">Bio.</h1>
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
      </div>
    </section>
  );
};

export default Bio;

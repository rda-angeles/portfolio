import React from "react";
import { LayoutGrid } from "./ui/life-layout-img-grid";
import SgLifeOne from "/public/images/life/sg-life-1.jpeg";
import SgLifeTwo from "/public/images/life/sg-life-2.jpeg";
import SgLifeThree from "/public/images/life/sg-life-3.jpeg";
import MyLifeOne from "/public/images/life/my-life-1.jpg";
import MyLifeTwo from "/public/images/life/my-life-2.jpg";
import MyLifeThree from "/public/images/life/my-life-3.jpg";
import MyLifeFour from "/public/images/life/myLife4.jpeg";
import MyLifeFive from "/public/images/life/myLife5.jpeg";
import MyLifeSix from "/public/images/life/myLife6.jpeg";

const Life = () => {
  const cards = [
    {
      id: 7,
      className: "col-span-1",
      thumbnail: MyLifeFour.src,
    },
    {
      id: 9,
      className: "md:col-span-1",
      thumbnail: MyLifeSix.src,
    },
    {
      id: 8,
      className: "col-span-1",
      thumbnail: MyLifeFive.src,
    },
    {
      id: 1,
      className: "md:col-span-2",
      thumbnail: SgLifeOne.src,
    },
    {
      id: 2,
      className: "col-span-1",

      thumbnail: SgLifeTwo.src,
    },
    {
      id: 3,
      className: "col-span-1",
      thumbnail: MyLifeTwo.src,
    },
    {
      id: 4,
      className: "md:col-span-2",
      thumbnail: MyLifeOne.src,
    },
    {
      id: 5,
      className: "md:col-span-2",
      thumbnail: SgLifeThree.src,
    },
    {
      id: 6,
      className: "col-span-1",
      thumbnail: MyLifeThree.src,
    },
  ];
  return (
    <section className="mt-10" id="life">
      <h1 className="title flex items-center gap-x-3">
        Life
        <span className="circle mt-3"></span>
      </h1>
      <div className="h-screen w-full mt-5">
        <LayoutGrid cards={cards} />
      </div>
    </section>
  );
};

export default Life;

"use client"
import Buildings from "@/icons/Buildings";
import Peoples from "@/icons/Peoples";
import React, { useState } from "react";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const AudienceBuilder = () => {
    const [isFinPeople, setIsFinPeople] = useState(false)
  return (
    <section className="p-[32px] font-general-sans-semibold  text-[#1C1C1E]">
      {/* Page Heading */}
      <div className="my-5 cursor-pointer">
        <h3 className="text-[22px]
        text-[#1C1C1E] font-semibold font-general-sans-semibold">Audience Builder</h3>
        <p className="text-sm text-[#3A383E] font-general-sans-semibold">Build your own Audience</p>
      </div>
      <div className="flex gap-5 my-5 cursor-pointer">
        <div
        onClick={() => setIsFinPeople(false)}
        className={`flex gap-2 ${
          isFinPeople === false ? "border-b-2 border-black text-black" : "text-gray-300"
        }`}>
          <Buildings />
          <h4 className="">Find Companies</h4>
        </div>
        <div 
        onClick={() => setIsFinPeople(true)}
        className={`flex gap-2 ${
          isFinPeople === true  ? "border-b-2 border-black text-black" : "text-gray-300"
        }`}>
          <Peoples />
          <h4 className="">Find People</h4>
        </div>
      </div>
      <hr className="my-5"/>
      <div className="grid grid-cols-12 bg-white text-black">
        {/* Left Side */}
        <div className="col-span-2">
          <LeftSide isFinPeople={isFinPeople}/>
        </div>
        {/* Right Side */}
        <div className="col-span-10">
          <RightSide isFinPeople={ isFinPeople } />
        </div>
      </div>
    </section>
  );
};

export default AudienceBuilder;

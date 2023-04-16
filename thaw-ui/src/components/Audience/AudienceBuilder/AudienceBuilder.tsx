import Buildings from "@/icons/Buildings";
import Peoples from "@/icons/Peoples";
import React from "react";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const AudienceBuilder = () => {
  return (
    <section className="p-[32px] ">
      {/* Page Heading */}
      <div className="my-5">
        <h3 className="text-lg font-semibold">Audience Builder</h3>
        <p className="text-sm text-[#3A383E]">Build your own Audience</p>
      </div>
      <div className="flex gap-5 my-5">
        <div className="flex gap-2">
          <Buildings />
          <h4>Find Companies</h4>
        </div>
        <div className="flex gap-2">
          <Peoples />
          <h4>Find Companies</h4>
        </div>
      </div>
      <hr className="my-5"/>
      <div className="grid grid-cols-12">
        {/* Left Side */}
        <div className="col-span-2">
          <LeftSide />
        </div>
        {/* Right Side */}
        <div className="col-span-10">
          <RightSide />
        </div>
      </div>
    </section>
  );
};

export default AudienceBuilder;

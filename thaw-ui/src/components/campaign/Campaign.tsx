import React from "react";
import icon from "../../assets/Icon.png";
import Image from "next/image";
import CreateCampaign from "./CreateCampaign/CreateCampaign";

const Campaign = () => {
  return (
    <div className="px-[32px] ">
      <div className="my-5">
        <h4 className="text-[22px] font-semibold">Campaigns</h4>
        <p className="text-[#3A383E] text-sm font-normal">
          Manage you Campaigns, or start a new Campaign
        </p>
      </div>
      <div className=" flex flex-col justify-center items-center mt-32">
        <Image src={icon} alt="" />
        <h4 className="font-medium text-[20px]">No Campaigns Yet!</h4>
        <p className="text-[14px] text-[#3A383E]">Start Your Campaign now</p>

        <label
          htmlFor="create-campaign"
          className="btn mt-4 normal-case text-base bg-[#D14814]"
        >
          New Campaign
        </label>
      </div>
      <CreateCampaign />
    </div>
  );
};

export default Campaign;

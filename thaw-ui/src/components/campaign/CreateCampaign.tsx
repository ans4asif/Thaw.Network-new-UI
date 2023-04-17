import React from "react";
import { RxCross1 } from "react-icons/rx";

const CreateCampaign = () => {
  return (
    <div>
      <input type="checkbox" id="create-campaign" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box max-w-none max-h-none w-full h-full relative lg:px-20">
          <div className=" mt-5">
            <h3 className="font-medium text-[28px]">Create Campaign</h3>
          </div>

          {/*  */}
          <div className="my-4 ">
            <label className="label">
              <span className="font-medium">Select Audience</span>
            </label>

            <select className="select select-bordered w-full max-w-xs">
              <option selected>Select Audience</option>
              <option>Pre-Seed Funds</option>
            </select>
          </div>

          {/*  */}
          <div className="my-5 ">
            <p className="font-medium mb-3">Select Stage</p>
            <div className="flex gap-3">
              <div className=" flex items-center gap-2 border border-[#CFCED4] px-3 py-2">
                <input
                  type="radio"
                  name="radio-10"
                  className="radio checked:bg-blue-500 radio-sm"
                />
                <p className="font-medium text-sm">Warm Up</p>
              </div>
              <div className="flex items-center gap-2 border border-[#CFCED4] px-3 py-2 ">
                <input
                  type="radio"
                  name="radio-10"
                  className="radio checked:bg-blue-500 radio-sm"
                />
                <p className="font-medium text-sm">Connect</p>
              </div>
              <div className=" flex items-center gap-2 border border-[#CFCED4] px-3 py-2">
                <input
                  type="radio"
                  name="radio-10"
                  className="radio checked:bg-blue-500 radio-sm"
                />
                <p className="font-medium text-sm">Outreach</p>
              </div>
              <div className="flex items-center gap-2 border border-[#CFCED4] px-3 py-2">
                <input
                  type="radio"
                  name="radio-10"
                  className="radio checked:bg-blue-500 radio-sm"
                />
                <p className="font-medium text-sm">Pitch Deck</p>
              </div>
              <div className="flex items-center gap-2 border border-[#CFCED4] px-3 py-2">
                <input
                  type="radio"
                  name="radio-10"
                  className="radio checked:bg-blue-500 radio-sm"
                />
                <p className="font-medium text-sm">Schedule Meeting</p>
              </div>
              <div className="flex items-center gap-2 border border-[#CFCED4] px-3 py-2">
                <input
                  type="radio"
                  name="radio-10"
                  className="radio checked:bg-blue-500 radio-sm"
                />
                <p className="font-medium text-sm">Investor Onboarding</p>
              </div>
            </div>
          </div>

          <div className="modal-action ">
            <label htmlFor="create-campaign">
              <RxCross1 className="cursor-pointer w-6 h-6 absolute top-5 right-5" />
            </label>
          </div>
          <div className="modal-action flex items-center gap-2 absolute bottom-8 right-8">
            <label
              htmlFor="create-campaign"
              className="font-medium text-base cursor-pointer"
            >
              Cancel
            </label>
            <label
              htmlFor="create-campaign"
              className="btn normal-case bg-[#D14814]"
            >
              Create
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCampaign;

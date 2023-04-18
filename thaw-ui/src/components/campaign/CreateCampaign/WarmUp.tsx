"use client";

import React, { useState } from "react";

const WarmUp = () => {
  const [currentStageCheck, setCurrentStageCheck] = useState(false);
  const [nextStageCheck, setNextStageCheck] = useState(false);
  const [delayCheck, setDelayCheck] = useState(false);

  return (
    <div>
      <div className="my-6 ">
        <p className="font-medium mb-3">Select Campaign Type</p>
        <div className="grid grid-cols-3 lg:grid-cols-5 gap-3">
          <div className=" flex items-center gap-2 border border-[#CFCED4] px-3 py-2">
            <input
              type="radio"
              name="radio-6"
              className="radio checked:bg-blue-500 radio-sm"
              // checked={}
              //   onChange={}
            />
            <p className="font-medium text-sm">Twitter Auto Liker</p>
          </div>
          <div className="flex items-center gap-2 border border-[#CFCED4] px-3 py-2 ">
            <input
              type="radio"
              name="radio-6"
              className="radio checked:bg-blue-500 radio-sm"
            />
            <p className="font-medium text-sm">LinkedIn Auto Liker</p>
          </div>
          <div className=" flex items-center gap-2 border border-[#CFCED4] px-3 py-2">
            <input
              type="radio"
              name="radio-6"
              className="radio checked:bg-blue-500 radio-sm"
            />
            <p className="font-medium text-sm">LinkedIn Profile View</p>
          </div>
          <div className="flex items-center gap-2 border border-[#CFCED4] px-3 py-2">
            <input
              type="radio"
              name="radio-6"
              className="radio checked:bg-blue-500 radio-sm"
            />
            <p className="font-medium text-sm">Twitter ReTweeter</p>
          </div>
          <div className="flex items-center gap-2 border border-[#CFCED4] px-3 py-2">
            <input
              type="radio"
              name="radio-6"
              className="radio checked:bg-blue-500 radio-sm"
            />
            <p className="font-medium text-sm">LinkedIn AI Commenter</p>
          </div>
          <div className="flex items-center gap-2 border border-[#CFCED4] px-3 py-2">
            <input
              type="radio"
              name="radio-6"
              className="radio checked:bg-blue-500 radio-sm"
            />
            <p className="font-medium text-sm">Twitter AI Commenter</p>
          </div>
        </div>
      </div>

      {/*  */}

      <div className="divider"></div>
      <div className=" flex items-center gap-2 px-3 py-2">
        <input
          type="checkbox"
          className="checkbox checkbox-primary checkbox-sm"
          checked={currentStageCheck}
          onChange={(e) => setCurrentStageCheck((prev) => !prev)}
        />
        <p className="font-medium text-base">Link to current stage campaigns</p>
      </div>

      {currentStageCheck && (
        <div>
          <div className="my-4 ">
            <label className="label">
              <span className="font-medium">Select Current Campaigns</span>
            </label>

            <select className="select select-bordered w-full max-w-xs">
              <option selected>Select Campaigns</option>
            </select>
          </div>
          <div>
            <div className="flex items-center gap-2  px-3 py-2 ">
              <input
                type="checkbox"
                name="before"
                className="checkbox checkbox-primary checkbox-sm"
              />
              <p className="font-medium text-sm">Set before </p>
            </div>
            <div className="flex items-center gap-2  px-3 py-2 ">
              <input
                type="checkbox"
                name="after"
                className="checkbox checkbox-primary checkbox-sm"
              />
              <p className="font-medium text-sm">Set after </p>
            </div>
            <div className="flex items-center gap-2  px-3 py-2 ">
              <input
                type="checkbox"
                name="delay-current"
                className="checkbox checkbox-primary checkbox-sm"
              />
              <p className="font-medium text-sm">Set delay </p>
            </div>
            <p className="text-[12px] text-[#74717C] pl-10">
              Be sure to set delays between campaigns. The ideal delay will
              likely be between a few days to a week.
            </p>
          </div>
        </div>
      )}

      {/*  */}

      <div className="divider"></div>
      <div className=" flex items-center gap-2 px-3 py-2">
        <input
          type="checkbox"
          className="checkbox checkbox-primary checkbox-sm"
          checked={nextStageCheck}
          onChange={(e) => setNextStageCheck((prev) => !prev)}
        />
        <p className="font-medium text-base">Link to next stage campaigns</p>
      </div>
      {nextStageCheck && (
        <div>
          <div className="my-4 ">
            <label className="label">
              <span className="font-medium">Select Next Campaigns</span>
            </label>

            <select className="select select-bordered w-full max-w-xs">
              <option selected>Select Campaigns</option>
            </select>
          </div>
          <div className="flex items-center gap-2  px-3 py-2 ">
            <input
              type="checkbox"
              name="delay-next"
              className="checkbox checkbox-primary checkbox-sm"
              checked={delayCheck}
              onChange={(e) => setDelayCheck((prev) => !prev)}
            />
            <p className="font-medium text-sm">Set delay </p>
          </div>
          <p className="text-[12px] text-[#74717C] pl-10">
            Be sure to set delays between campaigns. The ideal delay will likely
            be between a few days to a week.
          </p>

          {delayCheck && (
            <div className="flex items-center gap-4 my-4">
              <div className=" ">
                <label className="label">
                  <span className="font-medium">Days to Delay</span>
                </label>

                <input
                  type="text"
                  placeholder="Days"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              <div className=" ">
                <label className="label">
                  <span className="font-medium">Hours to Delay</span>
                </label>

                <input
                  type="text"
                  placeholder="Hours"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default WarmUp;

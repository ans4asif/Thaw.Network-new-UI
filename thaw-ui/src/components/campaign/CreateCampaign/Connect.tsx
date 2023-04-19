import React, { useState } from "react";
import LinkStageCampaigns from "./LinkStageCampaigns";

const Connect = () => {
  const [radioCheck, setRadioCheck] = useState(false);

  const [linkedConnectCheck, setLinkedConnectCheck] = useState(false);
  const [linkedConnectReqCheck, setLinkedConnectReqCheck] = useState(false);

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetName = e.target.name;

    setRadioCheck(targetName === "radio-1");
    setLinkedConnectCheck(targetName === "linked-connect");
    setLinkedConnectReqCheck(targetName === "linkedIn-connect-req");
  };

  return (
    <div>
      <div className="my-6 ">
        <p className="font-medium mb-3">Select Campaign Type</p>
        <div className="flex gap-3">
          <div className=" flex items-center gap-2 border border-[#CFCED4] px-3 py-2">
            <input
              type="radio"
              name="radio-1"
              className="radio checked:bg-blue-500 radio-sm"
              checked={radioCheck}
              onChange={handleRadioChange}
            />
            <p className="font-medium text-sm">Radio 1</p>
          </div>
          <div className="flex items-center gap-2 border border-[#CFCED4] px-3 py-2 ">
            <input
              type="radio"
              name="linked-connect"
              className="radio checked:bg-blue-500 radio-sm"
              checked={linkedConnectCheck}
              onChange={handleRadioChange}
            />
            <p className="font-medium text-sm">LinkedIn Auto Connect</p>
          </div>
          <div className=" flex items-center gap-2 border border-[#CFCED4] px-3 py-2">
            <input
              type="radio"
              name="linkedIn-connect-req"
              className="radio checked:bg-blue-500 radio-sm"
              checked={linkedConnectReqCheck}
              onChange={handleRadioChange}
            />
            <p className="font-medium text-sm">LinkedIn Connection Request</p>
          </div>
        </div>

        {/*  */}

        {(linkedConnectCheck || linkedConnectReqCheck) && (
          <div className="form-control my-8 border border-[#CFCED4] rounded py-2 px-3">
            <label className="label">
              <span className="label-text clear-left font-medium">
                Type your own message, or select a message template below{" "}
                <span className="text-[#74717C] font-normal">
                  (You can use AI to suggest alternative messages)
                </span>{" "}
              </span>
              {/* <span className="label-text-alt">Alt label</span> */}
            </label>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Type something..."
            ></textarea>
            <label className="cursor-pointer text-[#2463AC] font-medium">
              Re-write using AI
            </label>

            {/*  */}
            <div className="mt-3 flex flex-col gap-2">
              <div className="bg-[#F5FBFD] p-2">
                Lorem ipsum dolor sit amet consectetur. Lobortis consequat
                congue feugiat congue dolor nisl. Orci felis velit penatibus
                tellus ut morbi nulla venenatis. Tellus viverra tincidunt dui
                rhoncus enim.
              </div>
              <div className="bg-[#F5FBFD] p-2">
                Lorem ipsum dolor sit amet consectetur. Lobortis consequat
                congue feugiat congue dolor nisl. Orci felis velit penatibus
                tellus ut
              </div>
              <div className="bg-[#F5FBFD] p-2">
                Lorem ipsum dolor sit amet consectetur. Lobortis consequat
                congue feugiat congue dolor nisl. Orci felis velit penatibus
                tellus ut
              </div>
              <div className="bg-[#F5FBFD] p-2">
                Lorem ipsum dolor sit amet consectetur. Lobortis consequat
                congue feugiat congue dolor nisl. Orci felis velit penatibus
                tellus ut
              </div>
              <div className="bg-[#F5FBFD] p-2">
                Lorem ipsum dolor sit amet consectetur. Lobortis consequat
                congue feugiat congue dolor nisl. Orci felis velit penatibus
                tellus ut
              </div>
            </div>
          </div>
        )}
      </div>

      {/*  */}
      <LinkStageCampaigns />
    </div>
  );
};

export default Connect;

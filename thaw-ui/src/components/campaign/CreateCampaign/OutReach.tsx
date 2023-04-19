import React, { useState } from "react";
import LinkStageCampaigns from "./LinkStageCampaigns";

const OutReach = () => {
  const [linkedEvenInviteCheck, setLinkedEvenInviteCheck] = useState(false);

  const [linkedMsg, setLinkedMsg] = useState(false);
  const [twitterMsgCheck, setTwitterMsgCheck] = useState(false);

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetName = e.target.name;

    setLinkedEvenInviteCheck(targetName === "linked-invitation");
    setLinkedMsg(targetName === "linked-msg");
    setTwitterMsgCheck(targetName === "twitter-msg");
  };

  return (
    <div>
      <div className="my-6 ">
        <p className="font-medium mb-3">Select Campaign Type</p>
        <div className="flex gap-3">
          <div className=" flex items-center gap-2 border border-[#CFCED4] px-3 py-2">
            <input
              type="radio"
              name="linked-invitation"
              className="radio checked:bg-blue-500 radio-sm"
              checked={linkedEvenInviteCheck}
              onChange={handleRadioChange}
            />
            <p className="font-medium text-sm">LinkedIn Event Invitation</p>
          </div>
          <div className="flex items-center gap-2 border border-[#CFCED4] px-3 py-2 ">
            <input
              type="radio"
              name="linked-msg"
              className="radio checked:bg-blue-500 radio-sm"
              checked={linkedMsg}
              onChange={handleRadioChange}
            />
            <p className="font-medium text-sm">LinkedIn Message</p>
          </div>
          <div className=" flex items-center gap-2 border border-[#CFCED4] px-3 py-2">
            <input
              type="radio"
              name="twitter-msg"
              className="radio checked:bg-blue-500 radio-sm"
              checked={twitterMsgCheck}
              onChange={handleRadioChange}
            />
            <p className="font-medium text-sm">Twitter Message</p>
          </div>
        </div>

        {/*  */}

        {linkedEvenInviteCheck && (
          <div className="my-8">
            <p className="font-medium mb-2">Event Link</p>
            <input
              placeholder="Enter event link"
              className="input input-bordered w-full max-w-xs"
            />
            <div>
              <button className="btn bg-[#2463AC] mt-3">Save</button>
            </div>
          </div>
        )}

        {(linkedMsg || twitterMsgCheck) && (
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

export default OutReach;

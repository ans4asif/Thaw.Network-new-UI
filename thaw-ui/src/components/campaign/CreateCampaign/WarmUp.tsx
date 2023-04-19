"use client";

import React, { useState } from "react";
import { FiDownload } from "react-icons/fi";
import LinkStageCampaigns from "./LinkStageCampaigns";

const WarmUp = ({ onRequiredRadioChange }: any) => {
  const [twitterLikerCheck, setTwitterLikerCheck] = useState(false);
  const [linkedLikerCheck, setLinkedInLikerCheck] = useState(false);
  const [linkedInProfileViewCheck, setLinkedInProfileViewCheck] =
    useState(false);
  const [twitterReTweeterCheck, setTwitterReTweeterCheck] = useState(false);
  const [linkedInAiCommenterCheck, setLinkedInAiCommenterCheck] =
    useState(false);
  const [twitterAiCommenterCheck, setTwitterAiCommenterCheck] = useState(false);
  const [linkedInPosterCheck, setLinkedInPosterCheck] = useState(false);
  const [twitterPosterCheck, setTwitterPosterCheck] = useState(false);

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetName = e.target.name;

    setTwitterLikerCheck(targetName === "twitter-liker");
    setLinkedInLikerCheck(targetName === "linked-liker");
    setLinkedInProfileViewCheck(targetName === "linkedIn-profile-view");
    setTwitterReTweeterCheck(targetName === "twitter-reTweeter");
    setLinkedInAiCommenterCheck(targetName === "linkedIn-AiCommenter");
    setTwitterAiCommenterCheck(targetName === "twitter-AiCommenter");
    setLinkedInPosterCheck(targetName === "linkedIn-poster");
    setTwitterPosterCheck(targetName === "twitter-poster");

    if (
      targetName === "twitter-liker" ||
      targetName === "linked-liker" ||
      targetName === "linkedIn-profile-view" ||
      targetName === "twitter-reTweeter" ||
      targetName === "linkedIn-AiCommenter" ||
      targetName === "twitter-AiCommenter" ||
      targetName === "linkedIn-poster" ||
      targetName === "twitter-poster"
    ) {
      onRequiredRadioChange(true);
    } else {
      onRequiredRadioChange(false);
    }
  };

  return (
    <div>
      <div className="my-6 ">
        <p className="font-medium mb-3">Select Campaign Type</p>
        <div className="grid grid-cols-3 lg:grid-cols-5 gap-3">
          <div className=" flex items-center gap-2 border border-[#CFCED4] px-3 py-2">
            <input
              type="radio"
              name="twitter-liker"
              className="radio checked:bg-blue-500 radio-sm"
              checked={twitterLikerCheck}
              onChange={handleRadioChange}
            />
            <p className="font-medium text-sm">Twitter Auto Liker</p>
          </div>
          <div className="flex items-center gap-2 border border-[#CFCED4] px-3 py-2 ">
            <input
              type="radio"
              name="linked-liker"
              className="radio checked:bg-blue-500 radio-sm"
              checked={linkedLikerCheck}
              onChange={handleRadioChange}
            />
            <p className="font-medium text-sm">LinkedIn Auto Liker</p>
          </div>
          <div className=" flex items-center gap-2 border border-[#CFCED4] px-3 py-2">
            <input
              type="radio"
              name="linkedIn-profile-view"
              className="radio checked:bg-blue-500 radio-sm"
              checked={linkedInProfileViewCheck}
              onChange={handleRadioChange}
            />
            <p className="font-medium text-sm">LinkedIn Profile View</p>
          </div>
          <div className="flex items-center gap-2 border border-[#CFCED4] px-3 py-2">
            <input
              type="radio"
              name="twitter-reTweeter"
              className="radio checked:bg-blue-500 radio-sm"
              checked={twitterReTweeterCheck}
              onChange={handleRadioChange}
            />
            <p className="font-medium text-sm">Twitter ReTweeter</p>
          </div>
          <div className="flex items-center gap-2 border border-[#CFCED4] px-3 py-2">
            <input
              type="radio"
              name="linkedIn-AiCommenter"
              className="radio checked:bg-blue-500 radio-sm"
              checked={linkedInAiCommenterCheck}
              onChange={handleRadioChange}
            />
            <p className="font-medium text-sm">LinkedIn AI Commenter</p>
          </div>
          <div className="flex items-center gap-2 border border-[#CFCED4] px-3 py-2">
            <input
              type="radio"
              name="twitter-AiCommenter"
              className="radio checked:bg-blue-500 radio-sm"
              checked={twitterAiCommenterCheck}
              onChange={handleRadioChange}
            />
            <p className="font-medium text-sm">Twitter AI Commenter</p>
          </div>
          <div className="flex items-center gap-2 border border-[#CFCED4] px-3 py-2">
            <input
              type="radio"
              name="linkedIn-poster"
              className="radio checked:bg-blue-500 radio-sm"
              checked={linkedInPosterCheck}
              onChange={handleRadioChange}
            />
            <p className="font-medium text-sm">LinkedIn Auto Poster</p>
          </div>
          <div className="flex items-center gap-2 border border-[#CFCED4] px-3 py-2">
            <input
              type="radio"
              name="twitter-poster"
              className="radio checked:bg-blue-500 radio-sm"
              checked={twitterPosterCheck}
              onChange={handleRadioChange}
            />
            <p className="font-medium text-sm">Twitter Auto Poster</p>
          </div>
        </div>
      </div>

      {linkedInPosterCheck && (
        <div>
          <div>
            <label className="label">
              <span className="font-medium">Upload LinkedIn Posts File</span>
            </label>

            <label className="relative block w-80">
              <span className="absolute top-[12px] right-2 flex items-center pr-3 text-[#2463AC] font-medium cursor-pointer">
                Upload
              </span>
              <input
                type=""
                placeholder="Upload file"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
          </div>
          <div className="flex items-center gap-2 text-[#2463AC] my-5">
            <FiDownload />{" "}
            <p className="font-medium text-base ">Download CSV template </p>
          </div>

          <div className="my-6 ">
            <p className="font-medium mb-3">Posting cadence</p>
            <div className="grid grid-cols-3 lg:grid-cols-6 gap-3">
              <div className=" flex items-center gap-2 border border-[#CFCED4] px-3 py-2">
                <input
                  type="radio"
                  name="radio-10"
                  className="radio checked:bg-blue-500 radio-sm"
                />
                <p className="font-medium text-sm">3 per day</p>
              </div>
              <div className="flex items-center gap-2 border border-[#CFCED4] px-3 py-2 ">
                <input
                  type="radio"
                  name="radio-10"
                  className="radio checked:bg-blue-500 radio-sm"
                />
                <p className="font-medium text-sm">2 per day</p>
              </div>
              <div className="flex items-center gap-2 border border-[#CFCED4] px-3 py-2 ">
                <input
                  type="radio"
                  name="radio-10"
                  className="radio checked:bg-blue-500 radio-sm"
                />
                <p className="font-medium text-sm">1 per day</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {twitterPosterCheck && (
        <div>
          <div className="flex items-center gap-2 text-[#2463AC] my-5">
            <FiDownload />{" "}
            <p className="font-medium text-base ">Download CSV template </p>
          </div>

          <div className="my-6 ">
            <p className="font-medium mb-3">Posting cadence</p>
            <div className="grid grid-cols-3 lg:grid-cols-6 gap-3">
              <div className=" flex items-center gap-2 border border-[#CFCED4] px-3 py-2">
                <input
                  type="radio"
                  name="radio-10"
                  className="radio checked:bg-blue-500 radio-sm"
                />
                <p className="font-medium text-sm">3 per day</p>
              </div>
              <div className="flex items-center gap-2 border border-[#CFCED4] px-3 py-2 ">
                <input
                  type="radio"
                  name="radio-10"
                  className="radio checked:bg-blue-500 radio-sm"
                />
                <p className="font-medium text-sm">2 per day</p>
              </div>
              <div className="flex items-center gap-2 border border-[#CFCED4] px-3 py-2 ">
                <input
                  type="radio"
                  name="radio-10"
                  className="radio checked:bg-blue-500 radio-sm"
                />
                <p className="font-medium text-sm">1 per day</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/*  */}
      <LinkStageCampaigns />
    </div>
  );
};

export default WarmUp;

import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RiBarChartBoxLine } from "react-icons/ri";
import { FiEdit3 } from "react-icons/fi";

import clsx from "clsx";

const CampaignsKanban = () => {
  const campaigns = [
    {
      stage: "Warm Up",
      campaign: [
        {
          status: "coming soon",
          campaign_type: "Twitter Auto Liker",
          audience: "Pre-Seed Funds",
          name: "John M.",
        },
        {
          status: "Unpublished",
          campaign_type: "LinkedIn Auto Liker",
          audience: "Audience Name",
          name: "John M.",
        },
        {
          status: "Unpublished",
          campaign_type: "Twitter Auto Retweeter",
          audience: "Audience Name",
          name: "John M.",
        },
        {
          status: "coming soon",
          campaign_type: "LinkedIn Profile View",
          audience: "Audience Name",
          name: "John M.",
        },
        {
          status: "coming soon",
          campaign_type: "LinkedIn Personal Poster",
          audience: "Audience Name",
          name: "John M.",
        },
        {
          status: "coming soon",
          campaign_type: "Twitter Personal Poster",
          audience: "Audience Name",
          name: "John M.",
        },
      ],
    },
    {
      stage: "Connect",
      campaign: [
        {
          status: "Unpublished",
          campaign_type: "LinkedIn Auto Connect",
          audience: "Pre-Seed Funds",
          name: "John M.",
        },
        {
          status: "Unpublished",
          campaign_type: "Twitter Auto Connect",
          audience: "Pre-Seed Funds",
          name: "John M.",
        },
        {
          status: "Unpublished",
          campaign_type: "LinkedIn Auto Connect",
          audience: "Audience Name",
          name: "John M.",
        },
      ],
    },
    {
      stage: "Outreach",
      campaign: [
        {
          status: "Unpublished",
          campaign_type: "LinkedIn Message",
          audience: "Audience name",
          name: "John M.",
        },
        {
          status: "coming soon",
          campaign_type: "Twitter Auto Responder AI",
          audience: "Audience name",
          name: "John M.",
        },
        {
          status: "coming soon",
          campaign_type: "Email Autoresponder AI",
          audience: "Audience name",
          name: "John M.",
        },
        {
          status: "Unpublished",
          campaign_type: "LinkedIn Event Invitation",
          audience: "Audience name",
          name: "John M.",
        },
        {
          status: "coming soon",
          campaign_type: "LinkedIn Responder Message AI",
          audience: "Audience name",
          name: "John M.",
        },
      ],
    },
    {
      stage: "Pitch Deck",
      campaign: [
        {
          status: "Unpublished",
          campaign_type: "Share Pitch Deck Email",
          audience: "Audience name",
          name: "John M.",
        },
        {
          status: "Unpublished",
          campaign_type: "Viewed Pitch Deck Email",
          audience: "Audience name",
          name: "John M.",
        },
        {
          status: "Unpublished",
          campaign_type: "No Pitch Deck View LinkedIn Message",
          audience: "Audience name",
          name: "John M.",
        },
      ],
    },
    {
      stage: "Schedule Meeting",
      campaign: [
        {
          status: "Published",
          campaign_type: "Schedule Meeting Email",
          audience: "Audience name",
          name: "John M.",
        },
        {
          status: "Published",
          campaign_type: "Meeting Scheduled Email",
          audience: "Audience name",
          name: "John M.",
        },
        {
          status: "Published",
          campaign_type: "LinkedIn Meeting Reminder",
          audience: "Audience name",
          name: "John M.",
        },
        {
          status: "Published",
          campaign_type: "Twitter Meeting Reminder",
          audience: "Audience name",
          name: "John M.",
        },
      ],
    },
    {
      stage: "Investor Onboarding",
      campaign: [
        {
          status: "Published",
          campaign_type: "Prospecting SPV Email Invite",
          audience: "Audience name",
          name: "John M.",
        },
        {
          status: "Published",
          campaign_type: "Live SPV Email Invite",
          audience: "Audience name",
          name: "John M.",
        },
        {
          status: "Published",
          campaign_type: "Prospecting SPV LinkedIn Message Invite",
          audience: "Audience name",
          name: "John M.",
        },
        {
          status: "Published",
          campaign_type: "Live SPV LinkedIn Message Invite",
          audience: "Audience name",
          name: "John M.",
        },
        {
          status: "Published",
          campaign_type: "Prospecting SPV Twitter DM Invite",
          audience: "Audience name",
          name: "John M.",
        },
        {
          status: "Published",
          campaign_type: "Live SPV Twitter DM",
          audience: "Audience name",
          name: "John M.",
        },
      ],
    },
  ];

  const statusChip = ({ value }: any) => {
    return <CustomChip label={value} />;
  };

  const dynamicColor = [
    "#43B6E5",
    "#2463AC",
    "#FBAB72",
    "#FF8B38",
    "#EE5920",
    "#B53808",
  ];

  const colors = dynamicColor.map((color) => ({
    borderColor: color,
  }));
  const bgColors = dynamicColor.map((color) => ({
    backgroundColor: color,
  }));

  return (
    <div className="mr-8">
      {/* Header */}

      <div className="my-5 flex items-center justify-between">
        <div className="">
          <h4 className="text-[22px] font-semibold">Campaigns</h4>
          <p className="text-[#3A383E] text-sm font-normal">
            Manage you Campaigns, or start a new Campaign
          </p>
        </div>

        <div className="flex item-center gap-[6px] ">
          <div>
            <label className="relative block w-80">
              <span className="absolute top-[28px] left-1 flex items-center pl-3 font-medium text-[15px]">
                Team member:
              </span>
              <select className="select select-bordered w-full max-w-xs mt-4 text-right">
                <option disabled>Team member</option>
                <option selected>All</option>
              </select>
            </label>
          </div>
          <div>
            <label className="relative block w-80">
              <span className="absolute top-[28px] left-1 flex items-center pl-3 font-medium text-[15px]">
                Audience:
              </span>
              <select className="select select-bordered w-full max-w-xs mt-4 text-right">
                <option disabled>Audience</option>
                <option selected>All</option>
              </select>
            </label>
          </div>
          <div className="">
            <label
              htmlFor="create-campaign"
              className="btn mt-4 normal-case text-base bg-[#D14814]"
            >
              <AiOutlinePlus className="mr-2 h-6 w-6" />
              New Campaign
            </label>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="grid grid-cols-6 mt-8 gap-[20px]">
        {campaigns.map((item, i) => {
          return (
            <div key={i} className="font-medium">
              <div
                className=" border-b-4 p-2 mb-4 flex items-center justify-between"
                style={colors[i]}
              >
                <div>{item.stage}</div>
                <div
                  className="px-[10px] py-[3px]  rounded-3xl text-[14px] text-white font-medium"
                  style={bgColors[i]}
                >
                  {item.campaign.length}
                </div>
              </div>
              <div className="border border-[##E4E3E7] p-[5px] rounded-lg">
                {item.campaign.map((data, i) => {
                  return (
                    <div
                      key={i}
                      className="card w-[196px] bg-white border border-[##E4E3E7] mb-2"
                    >
                      <div className="p-3">
                        <div className="flex items-center justify-between">
                          <div className="uppercase">
                            {statusChip({ value: data.status })}
                          </div>
                          <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="cursor-pointer">
                              <BsThreeDotsVertical />
                            </label>
                            <ul
                              tabIndex={0}
                              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-60"
                            >
                              <li>
                                <a className="text-[#57555D] font-medium text-sm">
                                  <FiEdit3 className="h-5 w-5" />
                                  <span>Edit Campaign</span>
                                </a>
                              </li>
                              <li>
                                <a className="text-[#57555D] font-medium text-sm">
                                  <RiBarChartBoxLine className="h-5 w-5" />
                                  <span>Campaign Performance</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <p>{data.campaign_type}</p>
                        <p className="mb-2 text-[#918E9B]">{data.audience}</p>
                        <p className="text-[#918E9B]">{data.name}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const CustomChip = ({ label }: any) => {
  const getColors = (status: any) => {
    switch (status) {
      case "Unpublished":
        return "bg-[#FFEEE1] text-[#B53808]";
      case "Published":
        return "bg-[#DFFAE8] text-[#306049]";
      case "coming soon":
        return "bg-[#F6F5F8] text-[#4A3A61]";
    }
  };
  return (
    <div className="flex justify-center items-center">
      <div
        className={clsx(
          getColors(label),
          "py-[4px] rounded-3xl font-semibold px-3 text-center"
        )}
      >
        {label}
      </div>
    </div>
  );
};

export default CampaignsKanban;

"use client";

import React from "react";
import CreateCampaign from "@/components/campaign/CreateCampaign/CreateCampaign";
import { Toaster } from "react-hot-toast";
import EmptyState from "@/components/campaign/EmptyState";
import CampaignsKanban from "@/components/campaign/CampaignsKanban";

const Campaign = () => {
  return (
    <div className="px-[32px] bg-[#F9F9FA]">
      {/* <EmptyState /> */}
      <CampaignsKanban />

      <CreateCampaign />

      <Toaster />
    </div>
  );
};

export default Campaign;

import React from "react";
import { toast } from "react-hot-toast";
import { useUI } from "../ui/context";

const AddAudienceView = () => {
  const { closeModal } = useUI();
  const notify = () => {
    closeModal();
    toast.success("Add Audience Successfully.");
  };

  return (
    <div>
      <div className="p-6 ">
        <h3 className="mb-5 text-lg font-bold text-gray-500">
          Add to Audience
        </h3>
        <div className="flex flex-col mb-5">
          <label className="label">
            <span className="label-text">Select Existing Audience to Add to</span>
          </label>
          <select className="select select-bordered select-sm w-full max-w-xs">
            <option disabled selected>
              Select
            </option>
            <option>Tiny Apple</option>
            <option>Tiny Orange</option>
            <option>Tiny Tomato</option>
          </select>
        </div>
        <div className="flex gap-5 justify-end">
          <button onClick={() => closeModal()} className="btn btn-ghost btn-sm">
            Cancel
          </button>
          <button
            className="bg-red-600 btn btn-sm border-none text-white"
            onClick={notify}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddAudienceView;

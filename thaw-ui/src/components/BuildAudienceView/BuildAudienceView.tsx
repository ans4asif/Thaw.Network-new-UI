import React from 'react'
import { toast } from 'react-hot-toast';
import { useUI } from '../ui/context';

const BuildAudienceView = () => {
    const { closeModal } = useUI();
    const notify = () => {
      closeModal();
      toast.success("Create Audience Successfully");
    };
  
    return (
      <div>
        <div className="p-6 ">
          <h3 className="mb-5 text-lg font-bold text-gray-500">
            Build Audience
          </h3>
          <div className="flex flex-col mb-5">
            <label className="label">
              <span className="label-text font-bold">Audience Name</span>
            </label>
            <input type="text" placeholder="Enter Audience Name" className="input input-bordered w-full max-w-[406px]" />
          </div>
          <div className="flex gap-5 justify-end">
            <button onClick={() => closeModal()} className="btn btn-ghost btn-sm">
              Cancel
            </button>
            <button
              className="bg-red-600 btn btn-sm border-none text-white"
              onClick={notify}
            >
              Create
            </button>
          </div>
        </div>
      </div>
    );
}

export default BuildAudienceView
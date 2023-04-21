import { FC } from "react";
import { toast } from "react-hot-toast";
import { useUI } from "../ui/context";


const DeleteView = () => {
  const { closeModal } = useUI();
  const notify = () => {
    closeModal();
    toast.success('Company removed from Audience.');
  }



  return (
    <div>
      <div className="p-6 ">
        <h3 className="mb-5 text-lg font-bold text-gray-500">
        Remove from Audience 
        </h3>
        <h3 className="mb-5 text-lg font-normal text-gray-500 text-center">
        Are you sure you want to remove this company from Audience? 
        </h3>
        <div className="flex gap-5 justify-end">
          <button 
          onClick={() => closeModal()}
          className="btn btn-ghost btn-sm">
            Cancel
          </button>
          <button className="bg-red-600 btn btn-sm border-none text-white"
          onClick={notify}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteView;

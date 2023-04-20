import { useUI } from "@/components/ui/context";
import Delete from "@/icons/Delete";
import Plus from "@/icons/Plus";
import React, { useState } from "react";

interface props {
  isFinPeople?: boolean;
}

const RightSide: React.FunctionComponent<props> = ({ isFinPeople }) => {
  const [checked, setChecked] = useState<boolean>();

  const { openModal, setModalView, closeModal } = useUI();

  function modal(view: string) {
    openModal();
    setModalView(view);
  }
  return (
    <>
      <div className="relative overflow-x-auto shadow-md border border-[#E4E3E7] w-full">
        {/* Header */}
        <div className=" flex justify-between px-4 py-2.5">
          <div className="flex gap-2 items-center">
            <label htmlFor="table-search" className="sr-only">
              Search
            </label>
            <div className="relative mt-1">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500 "
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="table-search"
                className="block p-2 pl-10 text-sm text-black border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search companies..."
              />
            </div>
            <div className="text-accent text-sm">2,000,000+ results</div>
          </div>
          <div className="flex items-center gap-3">
            <button
              className="border flex items-center justify-center rounded-lg w-9 h-9"
              onClick={() => modal("ADDAUDIENCE_VIEW")}
            >
              <Plus />
            </button>
            <button
              onClick={() => modal("DELETE_VIEW")}
              disabled={!checked && true}
              className="border flex items-center justify-center rounded-lg w-9 h-9 disabled:bg-[#E4E3E7] bg-white"
            >
              <Delete />
            </button>
            <hr className="w-[1px] h-9 rotate-180 bg-[#E4E3E7]" />
            <button
              disabled={!checked && true}
              className="bg-[#D14814] text-white py-1 px-3 rounded-lg w-[135px] h-9 disabled:bg-[#E4E3E7]"
              onClick={() => modal("BUILDAUDIENCE_VIEW")}
            >
              Build Audience
            </button>
          </div>
        </div>
        {/* Body */}
        <table className="w-full text-sm text-left text-black">
          <thead className="text-xs text-black uppercase bg-[#F9F9FA] border-b border-[#E4E3E7] ">
            <tr>
              <th scope="col" className="p-4 border">
                <div className="flex items-center">
                  <input type="checkbox" className="checkbox" />
                  <label htmlFor="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th
                scope="col"
                className={`px-3 py-2 border  font-sans font-semibold text-sm ${
                  isFinPeople === true ? "" : "hidden"
                }`}
              >
                Name
              </th>
              <th
                scope="col"
                className="px-3 py-2 border  font-sans font-semibold text-sm"
              >
                Company
              </th>
              <th
                scope="col"
                className="px-3 py-2 border  font-sans font-semibold text-sm"
              >
                Fund Stage
              </th>
              <th
                scope="col"
                className="px-3 py-2 border  font-sans font-semibold text-sm"
              >
                Investor Type
              </th>
              <th
                scope="col"
                className="px-3 py-2 border  font-sans font-semibold text-sm"
              >
                Fund Focus
              </th>
              <th
                scope="col"
                className={`px-3 py-2 border  font-sans font-semibold text-sm ${
                  isFinPeople !== true ? "" : "hidden"
                }`}
              >
                Last Funding Round Amount
              </th>
              <th
                scope="col"
                className={`px-3 py-2 border  font-sans font-semibold text-sm ${
                  isFinPeople !== true ? "" : "hidden"
                }`}
              >
                No. of Contacts
              </th>
              <th
                scope="col"
                className={`px-3 py-2 border  font-sans font-semibold text-sm ${
                  isFinPeople === true ? "" : "hidden"
                }`}
              >
                Network
              </th>
              <th
                scope="col"
                className={`px-3 py-2 border  font-sans font-semibold text-sm ${
                  isFinPeople === true ? "" : "hidden"
                }`}
              >
                Contact Information
              </th>
            </tr>
          </thead>
          <tbody>
            {[...Array(20)].map((item, i) => {
              return (
                <tr key={i} className="bg-white border-b  hover:bg-gray-50 ">
                  <td className="w-4 p-4 border">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        className="checkbox"
                        onChange={(e) => setChecked(e.target.checked)}
                      />
                      <label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        checkbox
                      </label>
                    </div>
                  </td>
                  <td
                    className={`px-3 py-2 border ${
                      isFinPeople === true ? "" : "hidden"
                    }`}
                  >
                    <div className="flex items-center">
                      <img
                        className="w-10 h-10 rounded-full"
                        src="/people1.png"
                        alt="Robert Fox"
                      />
                      <div className="pl-3">
                        <div className="text-sm font-normal">Robert Fox</div>
                        <div className="flex items-center gap-1">
                        <span className="flex w-2 h-2 bg-green-500 rounded-full" />
                          <span className="opacity-50 text-[12px] font-thin">
                            In Campaign
                          </span>
                        </div>
                      </div>
                    </div>
                  </td>

                  <td className="flex px-3 py-2">
                    <div className="flex items-center">
                      <img
                        className="w-10 h-10 rounded-full"
                        src="/Frame 19.png"
                        alt="Robert Fox"
                      />
                      <div className="pl-3">
                        <div className="text-sm font-normal">
                          Wonka Industries
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-3 py-2 border">Series D</td>
                  <td className="px-3 py-2 border">Venture Capitalists</td>
                  <td className="px-3 py-2 border"> E-Commerce</td>
                  <td
                    className={`px-3 py-2 border ${
                      isFinPeople !== true ? "" : "hidden"
                    }`}
                  >
                    $105,000
                  </td>
                  <td
                    className={`px-3 py-2 border ${
                      isFinPeople !== true ? "" : "hidden"
                    }`}
                  >
                    $105,000
                  </td>
                  <td
                    className={`px-3 py-2 border ${
                      isFinPeople === true ? "" : "hidden"
                    }`}
                  >
                    1st Party Connection
                  </td>
                  <td
                    className={`px-3 py-2 border ${
                      isFinPeople === true ? "" : "hidden"
                    }`}
                  >
                    <div className="flex gap-[24px]">
                      <img src="/twitter.svg" alt="" />
                      <img src="linkedin.svg" alt="" />
                      <img src="/gmail.svg" alt="" />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default RightSide;

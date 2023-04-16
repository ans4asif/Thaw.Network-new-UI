import Delete from "@/icons/Delete";
import Plus from "@/icons/Plus";
import React from "react";

const RightSide = () => {
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
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="table-search"
                className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search for items"
              />
            </div>
            <div className="text-accent">2,000,000+ results</div>
          </div>
          <div className="flex items-center gap-3">
            <button className="border p-2 rounded-lg w-9 h-9">
              <Plus />
            </button>
            <button className="border p-2 rounded-lg h-9">
              <Delete />
            </button>
            <hr className="w-[1px] h-9 rotate-180 bg-[#E4E3E7]" />
            <button className="bg-[#E4E3E7] py-1 px-3 rounded-lg w-[135px] h-9">
              Build Audience
            </button>
          </div>
        </div>
        {/* Body */}
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-[#F9F9FA] border-b border-[#E4E3E7] ">
            <tr>
              <th scope="col" className="p-4 border">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                  />
                  <label htmlFor="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" className="px-6 py-3 border">
                Company
              </th>
              <th scope="col" className="px-6 py-3 border">
                Fund Stage
              </th>
              <th scope="col" className="px-6 py-3 border">
                Investor Type
              </th>
              <th scope="col" className="px-6 py-3 border">
                Fund Focus
              </th>
              <th scope="col" className="px-6 py-3 border">
                Last Funding Round Amount
              </th>
              <th scope="col" className="px-6 py-3 border">
                No. of Contacts
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b  hover:bg-gray-50 ">
              <td className="w-4 p-4 border">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-1"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                  />
                  <label htmlFor="checkbox-table-search-1" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap"
              >
                <img
                  className="w-10 h-10 rounded-full"
                  src="/Frame 19.png"
                  alt="Jese image"
                />
                <div className="pl-3">
                  <div className="text-base font-semibold">Neil Sims</div>
                </div>
              </th>
              <td className="px-6 py-4 border">Series D</td>
              <td className="px-6 py-4 border">Venture Capitalists</td>
              <td className="px-6 py-4 border"> E-Commerce</td>
              <td className="px-6 py-4 border">$105,000</td>
              <td className="px-6 py-4 border">$105,000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default RightSide;

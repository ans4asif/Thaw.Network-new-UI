import React, { useState } from "react";
import s from "./LeftSide.module.css";

const LeftSide = () => {
  const [employees, setEmployees] = useState<string>("1");
  const [fund, setFund] = useState<string>("10000");
  return (
    <div className=" p-4 isolate border">
      <div className="flex justify-between mb-5">
        <h4>Filter</h4>
        <button className="text-blue-500">Clear</button>
      </div>
      <hr className="my-5" />
      <form action="" className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label className="label">
            <span className="label-text">Industry Preference</span>
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
        <div className="flex flex-col">
          <label className="label">
            <span className="label-text">Investment Stage</span>
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
        <div className="flex flex-col">
          <label className="label">
            <span className="label-text">Industry Focus</span>
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
        <div className="flex flex-col">
          <label className="label">
            <span className="label-text">Geography</span>
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
        <div className={s.input_range}>
          <label className="label">
            <span className="label-text">Number of Employees:</span>
          </label>
          <input
            type="range"
            id="employees"
            name="employees"
            min="1"
            max="10000"
            value={employees}
            onChange={(e) => setEmployees(e.target.value)}
          />
          <label className="label">
            <span className="label-text-alt">{employees}</span>
            <span className="label-text-alt">10,000+</span>
          </label>
        </div>
        <div className={s.input_range}>
          <label className="label">
            <span className="label-text">Last Funding Round Amounts:</span>
          </label>
          <input
            type="range"
            id="fund"
            name="fund"
            min="10000"
            max="100000000"
            value={fund}
            onChange={(e) => setFund(e.target.value)}
          />
          <label className="label">
            <span className="label-text-alt">${fund}</span>
            <span className="label-text-alt">$100,000,000</span>
          </label>
        </div>
      </form>
    </div>
  );
};

export default LeftSide;

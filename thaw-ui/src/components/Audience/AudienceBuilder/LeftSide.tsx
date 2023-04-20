import React, { Component, useRef, useState } from "react";
import s from "./LeftSide.module.css";

const LeftSide = () => {
  const [data, setData] = useState({
    industry_preference: "",
    investment_stage: "",
    industry_focus: "",
    geography: "",
    no_of_employees: "1",
    last_funding_round_amounts: "10000",
  });
  console.log(data);

  const ref = useRef()

  const handleClear = () => {
    ref.current.reset()
    setData(
      {
        industry_preference: "",
        investment_stage: "",
        industry_focus: "",
        geography: "",
        no_of_employees: "1",
        last_funding_round_amounts: "10000",
      }
    )
  };

  return (
    <div className=" p-4 isolate border">
      <div className="flex justify-between mb-5">
        <h4>Filter</h4>
        <button
          onClick={handleClear}
          className="text-blue-500"
        >
          Clear
        </button>
      </div>
      <hr className="my-5" />
      <form ref={ref} action="" className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label className="label">
            <span className="label-text">Industry Preference</span>
          </label>
          <select
            className="select select-bordered select-sm w-full max-w-xs"
            onChange={(e) =>
              setData({ ...data, industry_preference: e.target.value })
            }
          >
            <option disabled selected>
              Select
            </option>
            <option value={"Tiny Apple"}>Tiny Apple</option>
            <option value={"Tiny Orange"}>Tiny Orange</option>
            <option value={"Tiny Tomato"}>Tiny Tomato</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label className="label">
            <span className="label-text">Investment Stage</span>
          </label>
          <select
            className="select select-bordered select-sm w-full max-w-xs"
            onChange={(e) =>
              setData({ ...data, investment_stage: e.target.value })
            }
          >
             <option disabled selected>
              Select
            </option>
            <option value={"Tiny Apple"}>Tiny Apple</option>
            <option value={"Tiny Orange"}>Tiny Orange</option>
            <option value={"Tiny Tomato"}>Tiny Tomato</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label className="label">
            <span className="label-text">Industry Focus</span>
          </label>
          <select
            className="select select-bordered select-sm w-full max-w-xs"
            onChange={(e) =>
              setData({ ...data, industry_focus: e.target.value })
            }
          >
            <option disabled selected>
              Select
            </option>
            <option value={"Tiny Apple"}>Tiny Apple</option>
            <option value={"Tiny Orange"}>Tiny Orange</option>
            <option value={"Tiny Tomato"}>Tiny Tomato</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label className="label">
            <span className="label-text">Geography</span>
          </label>
          <select
            className="select select-bordered select-sm w-full max-w-xs"
            onChange={(e) => setData({ ...data, geography: e.target.value })}
          >
             <option disabled selected>
              Select
            </option>
            <option value={"Tiny Apple"}>Tiny Apple</option>
            <option value={"Tiny Orange"}>Tiny Orange</option>
            <option value={"Tiny Tomato"}>Tiny Tomato</option>
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
            value={data?.no_of_employees}
            onChange={(e) =>
              setData({ ...data, no_of_employees: e.target.value })
            }
          />
          <label className="label">
            <span className="label-text-alt">{data?.no_of_employees}</span>
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
            value={data?.last_funding_round_amounts}
            onChange={(e) =>
              setData({ ...data, last_funding_round_amounts: e.target.value })
            }
          />
          <label className="label">
            <span className="label-text-alt">
              ${data?.last_funding_round_amounts}
            </span>
            <span className="label-text-alt">$100,000,000</span>
          </label>
        </div>
      </form>
    </div>
  );
};

export default LeftSide;

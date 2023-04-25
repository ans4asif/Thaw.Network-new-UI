import React, { Component, useRef, useState } from "react";
import s from "./LeftSide.module.css";

interface props {
  isFinPeople?: boolean;
}

const LeftSide: React.FunctionComponent<props> = ({ isFinPeople }) => {
  const [data, setData] = useState({
    industry_preference: "",
    investment_stage: "",
    industry_focus: "",
    geography: "",
    no_of_employees: "1",
    last_funding_round_amounts: "10000",
  });
  console.log(isFinPeople);

  const ref = useRef<HTMLFormElement>(null);

  const handleClear = () => {
    const clr = ref.current as any;
    clr.reset();
    setData({
      industry_preference: "",
      investment_stage: "",
      industry_focus: "",
      geography: "",
      no_of_employees: "1",
      last_funding_round_amounts: "10000",
    });
  };

  return (
    <div className=" p-4  border ">
      <div className="flex justify-between mb-5">
        <h4 className="font-semibold text-lg text-black">Filters</h4>
        <button onClick={handleClear} className="text-blue-500">
          Clear
        </button>
      </div>
      <hr className="my-5" />
      <form ref={ref} action="" className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label className="label">
            <span className="label-text  text-black font-semibold">
              Industry Preference
            </span>
          </label>
          <select
            className="select select-bordered select-sm w-full max-w-xs font-normal"
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
        <div
          className={` flex-col ${isFinPeople === true ? "flex" : "hidden"}`}
        >
          <label className="label">
            <span className="label-text  text-black font-semibold">
              Stage Preferences
            </span>
          </label>
          <select
            className="select select-bordered select-sm w-full max-w-xs font-normal"
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
        <div
          className={` flex-col ${isFinPeople === true ? "flex" : "hidden"}`}
        >
          <label className="label">
            <span className="label-text  text-black font-semibold">
              Fund Focus
            </span>
          </label>
          <select
            className="select select-bordered select-sm w-full max-w-xs font-normal"
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
        <div
          className={` flex-col ${isFinPeople !== true ? "flex" : "hidden"}`}
        >
          <label className="label">
            <span className="label-text  text-black font-semibold">
              Investment Stage
            </span>
          </label>
          <select
            className="select select-bordered select-sm w-full max-w-xs font-normal"
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
        <div
          className={` flex-col ${isFinPeople !== true ? "flex" : "hidden"}`}
        >
          <label className="label">
            <span className="label-text  text-black font-semibold">
              Industry Focus
            </span>
          </label>
          <select
            className="select select-bordered select-sm w-full max-w-xs font-normal"
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
            <span className="label-text  text-black font-semibold">
              Geography
            </span>
          </label>
          <select
            className="select select-bordered select-sm w-full max-w-xs font-normal"
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
        <div
          className={` flex-col ${isFinPeople === true ? "flex" : "hidden"}`}
        >
          <label className="label">
            <span className="label-text  text-black font-semibold">
              Network Connections
            </span>
          </label>
          <div className="form-control">
            <label className="flex items-center gap-5 px-1 py-2 cursor-pointer">
              <input
                type="radio"
                name="radio-10"
                className="radio checked:bg-blue-500"
                checked
              />
              <span className="label-text">1st Party Network</span>
            </label>
          </div>
          <div className="form-control">
            <label className="flex items-center gap-5 px-1 py-2 cursor-pointer">
              <input
                type="radio"
                name="radio-10"
                className="radio checked:bg-blue-500"
                checked
              />
              <span className="label-text">Extended Network</span>
            </label>
          </div>
        </div>
        <div
          className={` flex-col ${isFinPeople === true ? "flex" : "hidden"}`}
        >
          <label className="label">
            <span className="label-text  text-black font-semibold">
              Job Title
            </span>
          </label>
          <select
            className="select select-bordered select-sm w-full max-w-xs font-normal"
            onChange={(e) => setData({ ...data, geography: e.target.value })}
          >
            <option disabled selected>
              Select
            </option>
            <option value={"Tiny Apple"}>Tiny Apple</option>
            <option value={"Tiny Orange"}>Tiny Orange</option>
            <option value={"Tiny Tomato"}>Tiny Tomato</option>
          </select>
        </div>{" "}
        <div
          className={` flex-col ${isFinPeople === true ? "flex" : "hidden"}`}
        >
          <label className="label">
            <span className="label-text font-semibold text-black">
              Job Level
            </span>
          </label>
          <select
            className="select select-bordered select-sm w-full max-w-xs font-normal"
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
        <div className={` flex-col ${isFinPeople !== true ? "" : "hidden"}`}>
          <div className={s.input_range}>
            <label className="label">
              <span className="label-text font-semibold text-black">
                Number of Employees:
              </span>
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
        </div>
        <div className={` flex-col ${isFinPeople !== true ? "" : "hidden"}`}>
          <div className={s.input_range}>
            <label className="label">
              <span className="label-text font-semibold text-black">
                Last Funding Round Amounts:
              </span>
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
        </div>
        <div
          className={` flex-col ${isFinPeople !== true ? "flex" : "hidden"}`}
        >
          <label className="label">
            <span className="label-text  text-black font-semibold">
              Last Fundraising Round
            </span>
          </label>
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="MM/YY"
              className="input input-bordered w-full max-w-xs"
            />
            <hr className="bg-black w-1 h-2 rotate-90" />
            <input
              type="text"
              placeholder="MM/YY"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
        </div>
        <div
          className={` flex-col ${isFinPeople === true ? "flex" : "hidden"}`}
        >
          <div className="flex flex-col  gap-2">
            <label className="flex items-center gap-5 px-1 py-2 cursor-pointer font-semibold">
              <input type="checkbox" className="checkbox" />
              <span className=" text-[14px] text-blacklabel-text">
                Has Email
              </span>
            </label>
            <label className="flex items-center gap-5 px-1 py-2 cursor-pointer font-semibold">
              <input type="checkbox" className="checkbox" />
              <span className=" text-[14px] text-blacklabel-text">
                Has LinkedIn
              </span>
            </label>
            <label className="flex items-center gap-5 px-1 py-2 cursor-pointer font-semibold">
              <input type="checkbox" className="checkbox" />
              <span className=" text-[14px] text-blacklabel-text">
                Has Twitter
              </span>
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LeftSide;

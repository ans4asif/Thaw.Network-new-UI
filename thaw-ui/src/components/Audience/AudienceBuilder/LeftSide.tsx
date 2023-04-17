import React, { useState } from "react";
import s from './LeftSide.module.css'

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
          <label htmlFor="industry">Industry Preference</label>
          <select
            id="industry"
            name="industry_preference"
            className=" rounded-md px-2 py-1 placeholder:text-white"
          >
            <option value="volvo">Volvo XC90</option>
            <option value="saab">Saab 95</option>
            <option value="mercedes">Mercedes SLK</option>
            <option value="audi">Audi TT</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="industry">Investment Stage</label>
          <select
            id="industry"
            name="industry_preference"
            className="border border-[#57555D] rounded-md px-2 py-1"
          >
            <option value="volvo">Volvo XC90</option>
            <option value="saab">Saab 95</option>
            <option value="mercedes">Mercedes SLK</option>
            <option value="audi">Audi TT</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="industry">Industry Focus</label>
          <select
            id="industry"
            name="industry_preference"
            className="border border-[#57555D] rounded-md px-2 py-1"
          >
            <option value="volvo">Volvo XC90</option>
            <option value="saab">Saab 95</option>
            <option value="mercedes">Mercedes SLK</option>
            <option value="audi">Audi TT</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="industry">Geography</label>
          <select
            id="industry"
            name="industry_preference"
            className="border border-[#57555D] rounded-md px-2 py-1"
          >
            <option value="volvo">Volvo XC90</option>
            <option value="saab">Saab 95</option>
            <option value="mercedes">Mercedes SLK</option>
            <option value="audi">Audi TT</option>
          </select>
        </div>
        <div className={(s.input_range)}>
          <label htmlFor="employees">Number of Employees:</label>
          <input
            type="range"
            id="employees"
            name="employees"
            min="1"
            max="10000"
            value={employees}
            onChange={(e) => setEmployees(e.target.value)}
            
          />
          <div className="flex justify-between w-full">
            <label htmlFor="employees">{employees}</label>
            <label htmlFor="employees">10,000+</label>
          </div>
        </div>
        <div className={(s.input_range)}>
          <label htmlFor="fund">Last Funding Round Amounts:</label>
          <input
            type="range"
            id="fund"
            name="fund"
            min="10000"
            max="100000000"
            value={fund}
            onChange={(e) => setFund(e.target.value)}
            
          />
          <div className="flex justify-between w-full">
            <label htmlFor="fund">${fund}</label>
            <label htmlFor="fund">$100,000,000</label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LeftSide;

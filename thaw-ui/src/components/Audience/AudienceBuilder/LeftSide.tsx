import React from "react";

const LeftSide = () => {
  return (
    <div className=" p-4 isolate border">
      <div className="flex justify-between mb-5">
        <h4>Filter</h4>
        <button>Clear</button>
      </div>
      <hr className="my-5"/>
      <form action="" className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label htmlFor="industry">Industry Preference</label>
          <select id="industry" name="industry_preference" className="border border-[#57555D] rounded-md px-2 py-1">
            <option value="volvo">Volvo XC90</option>
            <option value="saab">Saab 95</option>
            <option value="mercedes">Mercedes SLK</option>
            <option value="audi">Audi TT</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="industry">Investment Stage</label>
          <select id="industry" name="industry_preference" className="border border-[#57555D] rounded-md px-2 py-1">
            <option value="volvo">Volvo XC90</option>
            <option value="saab">Saab 95</option>
            <option value="mercedes">Mercedes SLK</option>
            <option value="audi">Audi TT</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="industry">Industry Focus</label>
          <select id="industry" name="industry_preference" className="border border-[#57555D] rounded-md px-2 py-1">
            <option value="volvo">Volvo XC90</option>
            <option value="saab">Saab 95</option>
            <option value="mercedes">Mercedes SLK</option>
            <option value="audi">Audi TT</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="industry">Geography</label>
          <select id="industry" name="industry_preference" className="border border-[#57555D] rounded-md px-2 py-1">
            <option value="volvo">Volvo XC90</option>
            <option value="saab">Saab 95</option>
            <option value="mercedes">Mercedes SLK</option>
            <option value="audi">Audi TT</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default LeftSide;

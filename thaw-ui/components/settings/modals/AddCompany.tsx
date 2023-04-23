"use client";

import { useState } from "react";

function AddCompany() {
  const [page, setPage] = useState(0)

  return (
    <>
      <input type="checkbox" id="add-company-modal" className="modal-toggle" />
      {
        page == 0 ? (
          <div className="modal">
            <div className="relative bg-white modal-box">
              <label htmlFor="add-company-modal" className="absolute cursor-pointer right-8 top-6">✕</label>
              <h3 className="text-lg font-bold text-primary-text">Add Company</h3>
              
              <div className="flex gap-5">
                <div className="flex items-center gap-2">
                  <div className="avatar placeholder">
                    <div className="w-8 rounded-full bg-primary text-neutral-content">
                      <span className="text-white text-x">1</span>
                    </div>
                  </div>
                  <span className="text-primary-text">Company Details</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="avatar placeholder">
                    <div className="w-8 rounded-full bg-grey-200 text-neutral-content">
                      <span className="text-x text-grey-700">2</span>
                    </div>
                  </div>
                  <span>Additional Details</span>
                </div>
              </div>

              <div className="divider"></div>

              <form>
                <div className="w-full form-control">
                  <label className="label">
                    <span className="label-text text-primary-text">Company Name</span>
                  </label>
                  <input placeholder="Enter Company Name" className="w-full bg-white input input-bordered text-primary-text" />
                </div>
                <div className="w-full form-control">
                  <label className="label">
                    <span className="label-text text-primary-text">Company Description</span>
                  </label>
                  <textarea placeholder="Enter Description" className="w-full bg-white textarea textarea-bordered text-primary-text" />
                </div>
                <div className="w-full form-control">
                  <label className="label">
                    <span className="label-text text-primary-text">Company Website</span>
                  </label>
                  <input placeholder="Enter Company Website" className="w-full bg-white input input-bordered text-primary-text" />
                </div>
                <div className="w-full form-control">
                  <label className="label">
                    <span className="label-text text-primary-text">Company Team Members</span>
                  </label>
                  <select className="w-full bg-white input input-bordered text-primary-text">
                    <option disabled selected >Select Team Members</option>
                  </select>
                </div>
                <div className="w-full form-control">
                  <label className="label">
                    <span className="label-text text-primary-text">Company Email</span>
                  </label>
                  <input placeholder="Enter Company Email" className="w-full bg-white input input-bordered text-primary-text" />
                </div>
                <div className="flex w-full gap-4">
                  <div className="w-full form-control">
                    <label className="label">
                      <span className="label-text text-primary-text">Company LinkedIn</span>
                    </label>
                    <input placeholder="Enter Company LinkedIn" className="w-full bg-white input input-bordered text-primary-text" />
                  </div>
                  <div className="w-full form-control">
                    <label className="label">
                      <span className="label-text text-primary-text">Company Twitter</span>
                    </label>
                    <input placeholder="Enter Company Twitter" className="w-full bg-white input input-bordered text-primary-text" />
                  </div>
                </div>
                <div className="flex w-full gap-4">
                  <div className="w-full form-control">
                    <label className="label">
                      <span className="label-text text-primary-text">Current Valuation</span>
                    </label>
                    <input placeholder="Enter Current Valuation" className="w-full bg-white input input-bordered text-primary-text" />
                  </div>
                  <div className="w-full form-control">
                    <label className="label">
                      <span className="label-text text-primary-text">Previous Raise Rounds</span>
                    </label>
                    <input placeholder="Enter Previous Raise Rounds" className="w-full bg-white input input-bordered text-primary-text" />
                  </div>
                </div>
              </form>
              
              <div className="items-center gap-2 modal-action">
                <label htmlFor='add-company-modal' className="cursor-pointer text-dashboard-text">Cancel</label>
                <label onClick={() => setPage(1)} className="text-white cursor-pointer btn btn-error">Next</label>
              </div>
            </div>
          </div>    
        ):(
          <div className="modal">
            <div className="relative bg-white modal-box">
              <label htmlFor="add-company-modal" className="absolute cursor-pointer right-8 top-6">✕</label>
              <h3 className="text-lg font-bold text-primary-text">Add Company</h3>
              
              <div className="flex gap-5">
                <div className="flex items-center gap-2">
                  <div className="avatar placeholder">
                    <div className="w-8 rounded-full bg-grey-200 text-neutral-content">
                      <span className="text-x text-grey-700">1</span>
                    </div>
                  </div>
                  <span className="text-primary-text">Company Details</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="avatar placeholder">
                    <div className="w-8 rounded-full bg-primary text-neutral-content">
                      <span className="text-white text-x">2</span>
                    </div>
                  </div>
                  <span>Additional Details</span>
                </div>
              </div>

              <div className="divider"></div>

              <form>
                <div className="w-full form-control">
                  <label className="label">
                    <span className="label-text text-primary-text">News</span>
                  </label>
                  <textarea placeholder="Enter News" className="w-full bg-white textarea textarea-bordered text-primary-text" />
                </div>

                <div className="w-full form-control">
                  <label className="label">
                    <span className="label-text text-primary-text">Twitter Feed</span>
                  </label>
                  <a className="cursor-pointer text-primary">Add Twitter Feed</a>
                </div>
                
                <div className="w-full form-control">
                  <label className="label">
                    <span className="label-text text-primary-text">LinkedIn Feed</span>
                  </label>
                  <a className="cursor-pointer text-primary">Add LinkedIn Feed</a>
                </div>

                <div className="w-full form-control">
                  <label className="label">
                    <span className="label-text text-primary-text">Product Screenshots <span className="text-grey-700">(Optional)</span></span>
                  </label>
                  <input placeholder="Upload screenshots" className="w-full bg-white input input-bordered text-primary-text" />
                </div>

                <div className="w-full form-control">
                  <label className="label">
                    <span className="label-text text-primary-text">Video <span className="text-grey-700">(Optional)</span></span>
                  </label>
                  <input placeholder="Enter a Youtube Link" className="w-full bg-white input input-bordered text-primary-text" />
                </div>

                <div className="w-full form-control">
                  <label className="label">
                    <span className="label-text text-primary-text">Select Pitchdeck</span>
                  </label>
                  <select placeholder="Enter a Youtube Link" className="w-full bg-white select select-bordered text-primary-text">
                    <option>Select Pitchdeck</option>
                  </select>
                </div>

                <div className="w-full form-control">
                  <label className="label">
                    <span className="label-text text-primary-text">Select Calendar</span>
                  </label>
                  <select placeholder="Enter a Youtube Link" className="w-full bg-white select select-bordered text-primary-text">
                    <option>Select Calendar</option>
                  </select>
                </div>

                <div className="w-full form-control">
                  <label className="label">
                    <span className="label-text text-primary-text">Company Landing Page</span>
                  </label>
                  <input placeholder="https://thaw.network/company/Acme" className="w-full bg-white input input-bordered text-primary-text" />
                </div>
             
                <div className="w-full form-control">
                  <label className="label">
                    <span className="label-text text-primary-text">Call to Action Message to Potential Investors.</span>
                  </label>
                  <textarea placeholder="Enter Message" className="w-full bg-white textarea textarea-bordered text-primary-text" />
                </div>
              </form>
              
              <div className="flex items-baseline justify-between w-full">
                <a onClick={() => setPage(0)} className="text-error">Back</a>

                <div className="items-center gap-2 modal-action">
                  <label htmlFor='add-company-modal' className="cursor-pointer text-dashboard-text">Cancel</label>
                  <label htmlFor="add-company-modal" className="text-white cursor-pointer btn btn-error">Add</label>
                </div>
              </div>
            </div>
          </div>  
        )
      }
    </>
  );
}

export default AddCompany;
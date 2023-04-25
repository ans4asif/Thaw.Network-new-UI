import React from 'react'
import TrashSvg from '../../../../components/Svg/settingsSvg/TrashSvg'
import ChromeSvg from '../../../../components/Svg/settingsSvg/ChromeSvg'
import GmailSvg from '../../../../components/Svg/settingsSvg/GmailSvg'
import CalendarSvg from '../../../../components/Svg/settingsSvg/CalendarSvg'

export default function Admin() {
  return (
    <div className="px-52">
      <h2 className='my-8 text-2xl text-primary-text'>Profile Settings</h2>
      
      <div className='update-profile'>
        <div className="mb-2 avatar">
          <div className="w-20 h-20 rounded-full">
            <img src="/assets/avatarX2.png" />
          </div>
        </div>

        <div className='flex w-full'>
          <a className='text-primary'>Delete</a>
          <div className="mx-1 divider divider-horizontal"></div>
          <a className='text-primary'>Update</a>
        </div>

        <form className='flex flex-col gap-6 my-6'>
          <div className='form-control'>
            <label className='text-primary-text'>Email</label>
            <input type="text" placeholder="John@email.com" className="w-full max-w-xs bg-white input input-bordered" />
          </div>
          <div className='form-control'>
            <label className='text-primary-text'>First Name</label>
            <input type="text" placeholder="John" className="w-full max-w-xs bg-white input input-bordered" />
          </div>
          <div className='form-control'>
            <label className='text-primary-text'>Last Name</label>
            <input type="text" placeholder="Williams" className="w-full max-w-xs bg-white input input-bordered" />
          </div>
          <div>
            <button className='text-white btn btn-error bg-danger'>Save</button>
          </div>
        </form>

        <div className='divider'></div>

        <h2 className='my-8 text-2xl text-primary-text'>Social Media Session Cookies</h2>
      
        <form className='flex flex-col gap-6 mb-8'>
          <div className='form-control'>
            <label className='text-primary-text'>LinkedIn</label>
            <input type="text" placeholder="" className="w-full max-w-xs bg-white input input-bordered" />
          </div> 
          <div className='form-control'>
            <label className='text-primary-text'>Twitter</label>
            <input type="text" placeholder="" className="w-full max-w-xs bg-white input input-bordered" />
          </div>
          <div>
            <button className='mr-3 border-none btn btn-primary bg-primary'>Get Session Cookies</button>
            <button className='text-white btn btn-error bg-danger'>Save Cookies</button>
          </div>   
        </form>

        <div className='flex flex-col p-3 border rounded-md shadow bg-inactive-menu-light border-inactive-menu w-max'>
          <div className='flex items-center flex-column gap-2.5'>
            <GmailSvg />
            <div className='w-48'>
              <span className='text-primary-text'>Gmail</span>
            </div>
            <div>
              <button className='border-none btn btn-primary bg-primary btn-sm'>Give Access</button>
            </div>
          </div>
          <div className='divider bg-inactive-menu-light'></div>
          <div className='flex items-center flex-column gap-2.5'>
            <CalendarSvg />
            <div className='w-48'>
              <span className='text-primary-text'>Google Calendar</span>
            </div>
            <div>
              <button className='border-none btn btn-primary bg-primary btn-sm'>Give Access</button>
            </div>
          </div>
        </div> 

        <div className='flex gap-2 mt-6'>
          <ChromeSvg />
          <span className='text-primary-text'>Don't have the Chrome Extension, <a className='cursor-pointer text-primary'>download here.</a></span>
        </div>

        <div className='divider'></div>

        <h3 className='text-xl text-primary-text mb-7'>Pricing Tiers</h3>
        <span className='block text-base text-primary-text'>Starter Plan</span>
        <span className='block mb-4 text-xl text-primary-text'>$99/Month</span>
        <div className='flex w-full'>
          <a className='text-primary'>Upgrade to Growth Plan </a>
          <div className="mx-1 divider divider-horizontal"></div>
          <a className='text-primary'>Upgrade to Enterprise Plan </a>
          <div className="mx-1 divider divider-horizontal"></div>
          <a className='text-primary'>Compare Plans</a>
        </div>

        <div className='divider'></div>

        <div className='flex flex-col gap-9'>
          <h3 className='text-xl text-primary-text'>Credit Card</h3>
        
          <div className='flex gap-2'>
            <span className='text-primary-text'>**** **** *346</span>
            <div className='w-48'>
              <span className="text-purple-800 bg-purple-200 border-none badge">Default</span>
            </div>
            <TrashSvg className='' />
          </div>

          <div className='flex gap-2'>
            <span className='text-primary-text'>**** **** *346</span>
            <div className='w-48'>
              <a className="cursor-pointer text-primary">Set as default</a>
            </div>
            <TrashSvg className='' />
          </div>

          <div>
            <button className='text-white btn btn-error bg-danger'>Add Credit Card</button>
          </div>
        </div>

        <div className='divider'></div>

        <h3 className='mb-6 text-xl text-primary-text'>Generate Referral Link</h3>
        <form className='flex flex-col gap-6 mb-8'>
          <div className='form-control'>
            <label className='text-primary-text'>Email</label>
            <div>
              <input type="text" placeholder="" value="http://thaw.network/invite/johnwilliams/" className="w-full max-w-xs mr-5 bg-white input input-bordered" />
              <a className='cursor-pointer text-primary'>Copy</a>
            </div>
          </div> 
        </form> 

        <label htmlFor='my-modal' className='cursor-pointer text-red'>Delete My Profile</label>
      
        {/* modal */}
        <input type="checkbox" id="my-modal" className="modal-toggle" />
        <div className="modal">
          <div className="relative bg-white modal-box">
            <label htmlFor="my-modal" className="absolute cursor-pointer right-8 top-6">✕</label>
            <h3 className="text-lg font-bold text-primary-text">Delete My Profile</h3>
            <p className="py-4 text-primary-text">Are you sure you want to delete your profile?<br/>All information will be lost forever</p>
            <div className="items-center gap-2 modal-action">
              <label htmlFor='my-modal' className="cursor-pointer text-dashboard-text">Cancel</label>
              <label htmlFor="my-modal" className="text-white cursor-pointer btn btn-error">Delete</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
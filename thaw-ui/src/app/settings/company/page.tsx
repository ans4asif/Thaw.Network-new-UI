import React from 'react'
import AddCompany from '../../../../components/settings/modals/AddCompany'
import DeleteCompany from '../../../../components/settings/modals/DeleteCompany'
import InviteMember from '../../../../components/settings/modals/InviteMember'
import RemoveMember from '../../../../components/settings/modals/RemoveMember'
import TrashSvg from '../../../../components/Svg/settingsSvg/TrashSvg'

export default function Company() {
  return (
    <div className="px-52">
      <h2 className='my-8 text-2xl text-primary-text'>Portfolio Company Settings</h2>
      
      <div className='update-company'>
        <div className="w-full max-w-xs form-control">
          <label className="label">
            <span className="label-text text-primary-text">Companies Managed</span>
          </label>
          <select className="w-full max-w-xs bg-white select select-bordered text-primary-text">
            <option disabled selected>ACME</option>
          </select>
        </div>

        <div className='flex w-full mt-4 mb-7'>
          <a className='cursor-pointer text-primary'>Edit Current Company</a>
          <div className="mx-1 divider divider-horizontal"></div>
          <a className='cursor-pointer text-primary'>Preview Company Landing Page</a>
          <div className="mx-1 divider divider-horizontal"></div>
          <label className='cursor-pointer text-red' htmlFor="delete-company-modal">Delete Current Company</label>
        </div> 

        <div>
          <label className='text-white btn btn-error bg-danger' htmlFor='add-company-modal'>Add a New Company</label>
        </div>

        <div className='divider'></div>

        <h3 className='mt-8 text-2xl text-primary-text'>Team Members</h3>
        <span className='block text text-grey mb-7'>2 members out of 3</span>

        <div className="overflow-x-auto mb-7">
          <table className='table w-full'>
            <thead>
              <tr>
                <th className='bg-background text-primary-text'>Member</th>
                <th className='bg-background text-primary-text'>Email</th>
                <th className='bg-background text-primary-text'>Integration Status</th>
                <th className='bg-background'></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className='flex items-center gap-2 font-medium bg-background text-primary-text'>
                <div className="avatar">
                  <div className="w-8 rounded-xl">
                    <img src="/assets/avater.png" />
                  </div>
                </div>
                  Wade Warren
                </th>
                <td className='font-medium bg-background'>wade@email.com</td>
                <td className='flex items-center gap-5 bg-background'>
                  <img src="/assets/gmail-fire.png" />
                  <img src="/assets/linkedin-cold.png" />
                  <img src="/assets/twitter-cold.png" />
                </td>
                <td className='cursor-pointer bg-background'><label htmlFor='remove-member-modal'><TrashSvg className='' /></label></td>
              </tr>
              <tr>
                <th className='flex items-center gap-2 font-medium bg-background text-primary-text'>
                <div className="avatar">
                  <div className="w-8 rounded-xl">
                    <img src="/assets/avater.png" />
                  </div>
                </div>
                  Wade Warren
                  <div className="text-purple-800 bg-purple-200 border-none badge badge-ghost">Pendng Invite</div>
                </th>
                <td className='font-medium bg-background'>wade@email.com</td>
                <td className='flex items-center gap-5 bg-background'>
                  <img src="/assets/gmail-fire.png" />
                  <img src="/assets/linkedin-cold.png" />
                  <img src="/assets/twitter-cold.png" />
                </td>
                <td className='cursor-pointer bg-background'><label htmlFor='remove-member-modal'><TrashSvg className='' /></label></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <label className='text-white btn btn-error bg-danger' htmlFor='invite-member-modal'>Invite a New Member</label>
        </div>

        <DeleteCompany />
        <RemoveMember />
        <InviteMember />
        <AddCompany />
      </div>
    </div>
  )
}
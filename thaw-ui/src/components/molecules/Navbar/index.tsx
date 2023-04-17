import React from 'react'
import Image from 'next/image'
import avatar from '../../../assets/images/avatar.png'
import logo from '../../../assets/images/logo.png'
import Link from '@/components/atoms/Link'

const NavBar = () => {
  return (
    <div className="navbar bg-blue min-h-0 max-h-11 overflow-y-hidden">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl"><Image src={logo} alt='logo'/></a>
  </div>
  <div>
    <Link href='/' icon='insert_chart'>Dashboard</Link>
    <Link href='/campaigns' icon='insert_chart'>Campaigns</Link>
  </div>
  <div className="flex-none">
    <div className="dropdown dropdown-end">
    <button className="btn btn-ghost btn-circle text-white">
      <div className="indicator">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
        <span className="badge badge-xs badge-primary indicator-item bg-orange "></span>
      </div>
    </button>
     
    </div>
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-9 rounded-full">
            <Image src={avatar} alt='avatar'/>
        </div>
      </label>
    </div>
  </div>
</div>
  )
}

export default NavBar
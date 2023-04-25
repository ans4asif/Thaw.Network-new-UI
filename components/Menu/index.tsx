import Image from 'next/image';
import { useState } from 'react';
import menuIcon from '../../assets/menu_icon.svg';
interface Props {
  items: Array<any>;
}
function Menu({ items }: Props) {
  return (
    <div className='dropdown dropdown-left dropdown-bottom'>
      <label tabIndex={0} className='m-1 flex items-center justify-center w-[30px] h-[30px] cursor-pointer hover:bg-[#E4E3E7]'>
        <Image src={menuIcon} alt='icon' />
      </label>
      <ul
        tabIndex={0}
        className={`dropdown-content menu mt-2 p-2 min-w-[230px] shadow bg-base-100 rounded-box w-52`}
      >
        {items?.map((itm) => (
          <li
            className={`${itm?.showBorder && 'border-t border=[#E4E3E7]'} ${itm?.type == 'danger' && 'text-[#99202B]'}`}
            onClick={() => {
              itm?.onClick();
            }}
          >
            <span>
              {itm?.icon}
              {itm?.name}
            </span>
          </li>
        ))}
      </ul>
    </div>  
  );
}
export default Menu;

import React from 'react';
import PlusIcon from '../Svg/PlusIcon';
interface Button {
  children: React.ReactNode;
  type: string;
  icon?: string;
  onClick:()=>void;
}

const Button = ({ children, type, icon,...rest }: Button) => {
  return (
    <button {...rest} className={`btn gap-2 max-h-10 border-none capitalize rounded-lg outline-none cursor-pointer font-general-sans-regular ${type == 'primary' ? 'bg-orange hover:bg-orange' : type=='danger' ? 'bg-[#CC2B39] hover:bg-[#CC2B39]':'bg-white text-[#57555D] hover:text-white'}`}>
      {icon && icon == 'plus' && <PlusIcon className='h-4 w-4 mr-1 text-white' />}
      {children}
    </button>
  );
};

export default Button;

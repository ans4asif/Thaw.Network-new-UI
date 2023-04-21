import React, { useRef } from 'react';

const Modal = ({ isShowing, hideOnOutsideClick, hide, children,fullWidth,title ,rounded}: any) => {
  const modalRef: any = useRef();


  return (
    <>
      {/* Put this part before </body> tag */}
      {/* <input type='checkbox' id='my-modal-4' className='modal-toggle' /> */}
      <label htmlFor='my-modal-4' className={`modal cursor-pointer ${isShowing && 'modal-open'} `}>
        <label className={`modal-box relative ${rounded ? '':'rounded-none'} ${fullWidth && 'min-w-full'}`} htmlFor='' >
        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2 bg-transparent text-[#918E9B] border-none" onClick={()=>{hide()}}>✕</label>
          <h3 className={`font-general-sans-regular text-[28px] text-primary-text ${fullWidth && 'ml-[180px]'}`}>{title}</h3>
          {children}
        </label>
      </label>
    </>
  );
};

export default Modal;

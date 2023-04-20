import React, { useRef } from 'react';

const Modal = ({ isShowing, hideOnOutsideClick, hide, children,fullWidth }: any) => {
  const modalRef: any = useRef();

  const handleClickOutside = (event: any) => {
    if (modalRef.current && !modalRef?.current?.contains(event.target) && hideOnOutsideClick) {
      hide();
    }
  };

  return (
    <>
      {/* Put this part before </body> tag */}
      {/* <input type='checkbox' id='my-modal-4' className='modal-toggle' /> */}
      <label htmlFor='my-modal-4' className={`modal cursor-pointer ${ isShowing && 'modal-open'}`}>
        <label className='modal-box relative' htmlFor='' >
        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2 bg-transparent border-none color-[#918E9B]">✕</label>
          <h3 className='text-lg font-bold'>Congratulations random Internet user!</h3>
          <p className='py-4'>
            You've been selected for a chance to get one year of subscription to use Wikipedia for free!
          </p>
        </label>
      </label>
    </>
  );
};

export default Modal;

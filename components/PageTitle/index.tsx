import Image from 'next/image';
import React from 'react';
import arrowBack from '../../assets/arrow_back.svg';
interface Props {
  title: string;
  subTitle: string;
  btnComponent?: any;
  handleBackIcon?: any;
}
const PageTitle = ({ title, subTitle, btnComponent, handleBackIcon }: Props) => {
  return (
    <div className='flex items-center justify-between'>
      <div className='flex items-center gap-4'>
        {handleBackIcon && (
          <div>
            <span
              className='cursor-pointer block'
              onClick={() => {
                handleBackIcon();
              }}
            >
              <Image src={arrowBack} alt='arrow_back' />
            </span>
          </div>
        )}
        <div>
          <div className='font-general-sans-medium text-2xl text-primary-text'>{title}</div>
          <p className='font-general-sans-regular text-sm text-secondery-text'>{subTitle}</p>
        </div>
      </div>
      {!!btnComponent && <div>{btnComponent()}</div>}
    </div>
  );
};

export default PageTitle;

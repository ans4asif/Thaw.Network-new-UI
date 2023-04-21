import React from 'react'

interface Props{
    title:string;
    subTitle:string;
    btnComponent?:any
}
const PageTitle = ({title,subTitle,btnComponent}:Props) => {
  return (
    <div className='flex items-center justify-between'>
      <div>
        <div className="font-general-sans-medium text-2xl text-primary-text">{title}</div>
        <p className="font-general-sans-regular text-sm text-secondery-text">
          {subTitle}
        </p>
        </div>
        {!!btnComponent && (
          <div>
            {btnComponent()}
          </div>
        )}
    </div>
  )
}

export default PageTitle
import React from 'react'

interface Props{
    title:string;
    subTitle:string;
}
const PageTitle = ({title,subTitle}:Props) => {
  return (
    <div>
        <div className="font-general-sans-medium text-2xl text-primary-text">{title}</div>
        <p className="font-general-sans-regular text-sm text-secondery-text">
          {subTitle}
        </p>
    </div>
  )
}

export default PageTitle
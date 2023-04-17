import React from 'react'
interface Props{
    className:string
}
const PlusIcon = ({className}:Props) => {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.99984 1.16699V12.8337M1.1665 7.00033H12.8332" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  )
}

export default PlusIcon
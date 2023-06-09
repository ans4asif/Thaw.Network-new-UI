import React from 'react'

interface Props{
    items:Array<any>;
    cloumnNames:Array<string>;
    actionBtns?:any
}
const Table = ({items,cloumnNames,actionBtns}:Props) => {
  const isOpen=true
  return (
    // <div className="overflow-x-auto">
  <table className="table w-full deck-table hover:bg-[#F5FBFD]">
    {/* head */}
    <thead>
      <tr>
        {cloumnNames?.map((itm)=>(
            <th className='rounded-none border-solid border border-[#E4E3E7]'>{itm}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {!!items?.length && items.map((itm)=>(
        <tr className=''>
         <td className=' rounded-none border-solid border border-[#E4E3E7]'>{itm?.name}</td>
         <td className=' rounded-none border-solid border border-[#E4E3E7]'>{itm?.created_on}</td>
         <td className=' rounded-none border-solid border border-[#E4E3E7]'>{itm?.last_modified}</td>
         <td className=' rounded-none border-solid border border-[#E4E3E7] flex items-center justify-between'>{itm?.created_by}
         <span>{actionBtns()}</span>
         </td>
       </tr>
      )) 
      }
    </tbody>
  </table>
// </div>
  )
}

export default Table
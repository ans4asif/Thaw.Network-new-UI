import React from 'react'

interface Props{
    items:Array<any>;
    cloumnNames:Array<string>;
}
const Table = ({items,cloumnNames}:Props) => {
  return (
    <div className="overflow-x-auto">
  <table className="table w-full deck-table hover:bg-[#F5FBFD]">
    {/* head */}
    <thead>
      <tr>
        {/* <th></th> */}
        {cloumnNames?.map((itm)=>(
            <th className='rounded-none border-solid border border-[#E4E3E7]'>{itm}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {!!items?.length && items.map((itm)=>(
        <tr>
         <td className='rounded-none border-solid border border-[#E4E3E7]'>{itm?.name}</td>
         <td className='rounded-none border-solid border border-[#E4E3E7]'>{itm?.created_on}</td>
         <td className='rounded-none border-solid border border-[#E4E3E7]'>{itm?.last_modified}</td>
         <td className='rounded-none border-solid border border-[#E4E3E7]'>{itm?.created_by}</td>
       </tr>
      )) 
      }
    </tbody>
  </table>
</div>
  )
}

export default Table
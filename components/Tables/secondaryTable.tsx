import React from 'react';

interface Props {
  items: Array<any>;
  columnNames: Array<string>;
}
const SecondaryTable = ({ items, columnNames }: Props) => {
  return (
    <div className='overflow-x-auto w-full max-h-[660px] performance-table-holder'>
    <table className='table w-full performance-table '>
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                <input type='checkbox' className='checkbox' />
              </label>
            </th>
            {columnNames?.map((name) => (
              <th>{name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {items?.map((itm) => (
            <tr>
              <th className='max-w-[52px]'>
                <label>
                  <input type='checkbox' className='checkbox' />
                </label>
              </th>
              <td>
                <div className='flex items-center space-x-3'>
                  <div className='avatar'>
                    <div className='mask mask-squircle w-12 h-12'>
                      <img className='w-10 h-10 rounded-full' src='/people1.png' alt='Robert Fox' />
                    </div>
                  </div>
                  <div>
                    <div>{itm?.visitors}</div>
                  </div>
                </div>
              </td>

              <td>{itm?.views_count}</td>
              <td>{itm?.last_viewed}</td>
              <td>{itm?.downloaded ? <span className="bg-[#DFFAE8]  text-[#306049] px-2 py-1  rounded-full text-center uppercase">Yes</span>
 : <span className="bg-[#FFF4F5]  text-[#66151C] px-2 py-1  rounded-full text-center uppercase">No</span>}</td>
              <td>{itm?.time_spend}</td>
              <td>{itm?.viewed_slides}</td>
              {/* <th>
   <button className="btn btn-ghost btn-xs">details</button>
 </th> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SecondaryTable;

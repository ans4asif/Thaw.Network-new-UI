'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import uploadIcon from '../../assets/upload_icon.png';
interface Props {
  type: string;
  error?: string;
  placeholder?: string;
  label: string;
  name: string;
  value: any;
  onChange: any;
  hideLabel?: boolean;
}
const Field = ({ type, error, placeholder = 'Type here', label, name, value, onChange, hideLabel }: Props) => {
  const handleChange = (e: any) => {
    onChange({ name, value: e?.target?.value });
  };
  const [file, setFile] = useState(null);

  const handleFileUpload = (e: any) => {
    setFile(e.target.files[0]);
  };
  return (
    <>
      <div className='flex-col'>
        {!hideLabel && (
          <label className='block text-primary-text mb-2 font-general-sans-medium' htmlFor={name}>
            {label}
            {type == 'chooseFile' && <span className='pl-1 text-[#A5A3AE]'>(PDF Only)</span>}
          </label>
        )}
        {type == 'search' && (
          <>
           <div className="relative mt-1">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500 "
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="table-search"
                className="block p-2 pl-10 text-sm text-black border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={(e: any) => {
                  console.log({ val: e?.target?.value });
                  onChange({ name, value: e?.target?.value });
                }}
              />
            </div>
          </>
        )}
        {(type == 'text' || type == 'password') && (
          <input
            type={type}
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={(e: any) => {
              console.log({ val: e?.target?.value });
              onChange({ name, value: e?.target?.value });
            }}
            className={`input input-bordered input-md ${!!error && 'input-error'} w-full max-w-[365px] h-[40px]`}
          />
        )}
        {type == 'chooseFile' && (
          // <input type="file" className="file-input file-input-bordered w-full max-w-xs" accept='pdf'/>
          <div
            className={`flex items-center justify-between bg-white border rounded-lg px-4 py-3 max-w-[365px] h-[40px] ${
              !!error && 'input-error'
            }`}
          >
            <label className=' w-full cursor-pointer text-primary-text font-general-sans-medium'>
              <input type='file' className={`hidden `} onChange={handleFileUpload} placeholder='Upload .pdf file' />
              <span className='text-blue-600 hover:text-blue-800 cursor-pointer'>
                {file ? (
                  file?.name
                ) : (
                  <>
                    <span
                      className={`flex items-center ${!file ? 'justify-end' : 'justify-start'} gap-3 text-primary `}
                    >
                      <Image src={uploadIcon} alt='upload' />
                      Upload
                    </span>
                  </>
                )}
              </span>
            </label>
          </div>
        )}
        {type == 'toggle' && (
          <>
            <input type='checkbox' className='peer sr-only' checked={!!value} readOnly />
            <div
              onClick={() => {
                onChange({ name, value: !value });
              }}
              className={`relative after:top-0.75 peer h-5 w-10 rounded-full  bg-[#BAB8C1]  after:absolute ${
                !!value ? 'after:left-[13px]' : 'after:left-[5px]'
              } after:top-[4px] after:h-3 after:w-3 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-[#368FCF] peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-green-300`}
            ></div>
          </>
        )}
        {error && <p className='text-[#99202B] text-xs pl-1'>{error}</p>}
      </div>
    </>
  );
};

export default Field;

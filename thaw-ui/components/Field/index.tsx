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
            <div className='flex items-center border border-[#CFCED4] rounded-[8px] px-4 py-2 input-bordered input-md'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='w-6 h-6 text-gray-400'
              >
                <path
                  fill-rule='evenodd'
                  d='M8.5 15a6.5 6.5 0 1 1 5.435-2.886l5.412 5.412a1 1 0 0 1-1.414 1.414l-5.412-5.412A6.472 6.472 0 0 1 8.5 15zm0-2a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9z'
                  clip-rule='evenodd'
                />
              </svg>
              <input
                className='bg-transparent ml-4 outline-none'
                type='text'
                name={name}
                value={value}
                placeholder={placeholder}
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

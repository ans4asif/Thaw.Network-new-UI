import React, { useState } from 'react';
import Field from '../Field';
import Button from '../Button';

interface Props {
  hide: () => void;
  onSubmit: any;
  values?: {
    deck_name: string;
    file: any;
    email_to_view: boolean;
    downloading: boolean;
    password_protection: boolean;
    password?: string;
  };
}
const PitchDeckForm = ({ hide, values }: Props) => {
  const [value, setValues] = useState({
    deck_name: values?.deck_name ?? '',
    file: values?.file ?? null,
    email_to_view: values?.email_to_view ?? false,
    downloading: values?.downloading ?? false,
    password_protection: values?.password_protection ?? false,
    password: values?.password ?? '',
  });
  const [errors, setErrors] = useState({
    deck_name: '',
    file: '',
    password: '',
  });
  const handleChange=({name,value}:any)=>{
    console.log("handle",{name,value})
    // console.log({name,value})
    setValues((prev:any)=>({...prev,[name]:value}))

  }
  console.log({value})
  return (
    <div className='py-8'>
      <form>
        <div className='max-w-[1072px] pl-[184px]'>
          <div className='mb-3'>
            <Field
              type='text'
              name='deck_name'
              label='Deck Name'
              value=''
              error={errors.deck_name}
              onChange={({name,value}:any) => {
                console.log('here')
                handleChange({name,value})}}
            />
          </div>
          <div className='mb-3 mt-3'>
            <Field
              type='chooseFile'
              name='file'
              label='Upload Pitch Deck'
              value=''
              error={errors.file}
              onChange={() => {}}
            />
          </div>
          <hr className='mt-10 bg-[#E4E3E7] h-[1px]' />
          <div className='py-5'>
            <h2 className='font-general-sans-regular text-[20px] text-primary-text'>Dock Sharing Settings</h2>
          </div>
          <div>
            <div className='max-w-[480px] flex justify-between items-center py-4'>
              <span className='block font-general-sans-medium text-[16px] text-primary-text'>
                Require email to view
              </span>
              <Field
                type='toggle'
                name='email_to_view'
                label='email to view'
                hideLabel
                onChange={({name,value}:any) => {handleChange({name,value})}}
                value={value.email_to_view}
              />
            </div>
            <div className='max-w-[480px] flex justify-between items-center py-4'>
              <span className='block font-general-sans-medium text-[16px] text-primary-text'>Enable downloading</span>
              <Field
                type='toggle'
                name='downloading'
                label='downloading'
                hideLabel
                onChange={({name,value}:any) => {handleChange({name,value})}}
                value={value.downloading}
              />
            </div>
            <div className='max-w-[480px] flex justify-between items-center py-4'>
              <span className='block font-general-sans-medium text-[16px] text-primary-text'>
                Enable Password Protection
              </span>
              <Field
                type='toggle'
                name='password_protection'
                label='email to view'
                hideLabel
                onChange={({name,value}:any) => {handleChange({name,value})}}
                value={value.password_protection}
              />
            </div>
            {value.password_protection && (
              <div className='py-4'>
                <Field
                  type='text'
                  name='password'
                  label='Password'
                  value=''
                  error={errors.password}
                  onChange={({name,value}:any) => {handleChange({name,value})}}
                />
              </div>
            )}
          </div>
        </div>
        <div className='flex justify-end items-center gap-5'>
          <Button
            type='secondary'
            onClick={() => {
              hide();
            }}
          >
            Cancel
          </Button>
          <Button
            type='primary'
            onClick={() => {
              hide();
            }}
          >
            Create
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PitchDeckForm;

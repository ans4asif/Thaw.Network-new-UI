'use client';
import React, { useState } from 'react';
import Button from '../../../components/Button';
import PageTitle from '../../../components/PageTitle';
import Image from 'next/image';
import Deck from '../../../assets/pitch_deck.png';
import Field from '../../../components/Field';
import Modal from '../../../components/Modal';
import PitchDeckForm from '../../../components/PitchDeckForm';
import Table from '../../../components/Tables';
import Menu from '../../../components/Menu';
import eyeIcon from '../../../assets/eye.svg';
import linkIcon from '../../../assets/link.svg';
import chartIcon from '../../../assets/chart.svg';
import editIcon from '../../../assets/edit.svg';
import deleteIcon from '../../../assets/delete.svg';
import SecondaryTable from '../../../components/Tables/secondaryTable';
const PitchDeck = () => {
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [view,setView]=useState('pitch_deckj')
  const [pitchDecks, setPitchDecks] = useState([
    {
      id: 1,
      name: 'John doe',
      created_on: 'May 21,2023',
      last_modified: 'May 24,2023',
      created_by: 'Robert Fox',
    },
    {
      id: 2,
      name: 'John doe',
      created_on: 'May 21,2023',
      last_modified: 'May 24,2023',
      created_by: 'Robert Fox',
    },
    {
      id: 3,
      name: 'John doe',
      created_on: 'May 21,2023',
      last_modified: 'May 24,2023',
      created_by: 'Robert Fox',
    },
  ]);
  const [menuItems] = useState([
    { id: 1, name: 'View Pitch Deck', icon: <Image src={eyeIcon} alt='icon' />, onClick: () => {} },
    { id: 2, name: 'Copy Pitch Deck link', icon: <Image src={linkIcon} alt='icon' />, onClick: () => {} },
    { id: 3, name: 'Pitch Deck Performance', icon: <Image src={chartIcon} alt='icon' />, onClick: () => {} },
    { id: 2, name: 'Edit Pitch Deck', icon: <Image src={editIcon} alt='icon' />, onClick: () => {}, showBorder: true },
    {
      id: 2,
      name: 'Delete Pitch Deck',
      icon: <Image src={deleteIcon} alt='icon' />,
      onClick: () => {
        setShowDeleteModal(true);
      },
      showBorder: true,
      type: 'danger',
    },
  ]);
  const [columnNames] = useState(['Pitch Deck Name', 'Created On', 'Last Modified', 'Created By']);
  const handleSubmit = (val: any) => {
    console.log({ val });
  };
  const actionBtns = () => {
    return <Menu items={menuItems} />;
  };
  return (
    <div className='container'>
      <div className='pt-8 pb-4'>
        <PageTitle
          title='Pitch Deck'
          subTitle='Manage your Pitch Decks, or create a new Pitch Deck'
          btnComponent={() => (
            <Button type='primary' icon='plus' onClick={() => setShowModal(true)}>
              New Pitch Deck
            </Button>
          )}
        />
      </div>
      <section className='min-h-screen'>
        {/* no pitch deck */}
        {!pitchDecks.length ? (
          <div className='flex justify-center content-center min-h-screen'>
            <div className='my-auto mx-0'>
              <div className='flex justify-center'>
                <Image src={Deck} alt='deck' />
              </div>
              <div className='text-center py-7'>
                <h4 className='font-medium text-[20px]'>No Pitch Deck Yet!</h4>
                <p className='text-[14px] text-[#3A383E]'>Create Your Pitch Deck Now</p>
              </div>
              <div className='mt-2'>
                <Button type='primary' icon='plus' onClick={() => setShowModal(true)}>
                  Create Pitch Deck
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div className='mt-5'>
            {view=='pitch_deck' ? (
              <>
                  <div className='bg-white w-full max-h-[70px]'>
                  <div className='py-2 pl-3 max-w-[275px]'>
                    <Field
                    type='search'
                    label=''
                    name='search_text'
                    placeholder='Search...'
                    onChange={()=>{}}
                    value={''}
                    />
                  </div>
                </div>
                <Table items={pitchDecks} cloumnNames={columnNames} actionBtns={actionBtns} />
                </>
            ):(
              <SecondaryTable items={[]}/>
            )}
      
          </div>
        )}
        {/* ========== */}
        <Modal
          isShowing={showModal}
          hideOnOutsideClick={true}
          hide={() => setShowModal(false)}
          fullWidth
          title='Pitch Deck'
        >
          <PitchDeckForm hide={() => setShowModal(false)} onSubmit={handleSubmit} />
        </Modal>
        <Modal
          isShowing={showDeleteModal}
          hideOnOutsideClick={true}
          hide={() => setShowDeleteModal(false)}
          title='Delete Pitch Deck'
          rounded
        >
          <div>
            <div className='py-4 font-general-sans-regular text-[16px] text-primary-text'>
              <p>Are you sure you want to delete this Pitch Deck? This action can not be undone.</p>
            </div>
            <div className='flex justify-end items-center gap-5'>
              <Button
                type='secondary'
                onClick={() => {
                  setShowDeleteModal(false)
                }}
              >
                Cancel
              </Button>
              <Button
                type='danger'
                onClick={() => {
                  setShowDeleteModal(false)
                }}
              >
                Delete
              </Button>
            </div>
          </div>
        </Modal>
      </section>
    </div>
  );
};

export default PitchDeck;

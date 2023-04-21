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
const PitchDeck = () => {
  const [showModal, setShowModal] = useState(false);
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
  const [columnNames] = useState(['Pitch Deck Name', 'Created On', 'Last Modified', 'Created By']);
  const handleSubmit = (val: any) => {
    console.log({ val });
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
          <Table items={pitchDecks} cloumnNames={columnNames} />
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
      </section>
    </div>
  );
};

export default PitchDeck;

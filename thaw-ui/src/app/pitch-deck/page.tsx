'use client'
import React, { useState }  from 'react';
import Button from '../../../components/Button';
import PageTitle from '../../../components/PageTitle';
import Image from 'next/image';
import Deck from '../../../assets/pitch_deck.png'
import Field from '../../../components/Field';
import Modal from '../../../components/Modal';
import PitchDeckForm from '../../../components/PitchDeckForm';
const PitchDeck = () => {
  const [showModal, setShowModal] = useState(false);
const handleSubmit=(val:any)=>{
console.log({val})
}
  return (
    <div className='container'>
      <div className='pt-8 pb-4 flex justify-between'>
        <PageTitle title='Pitch Deck' subTitle='Manage your Pitch Decks, or create a new Pitch Deck' />
      </div>
      <section className='flex justify-center content-center min-h-screen'>
        <div className='my-auto mx-0'>
          <div className="flex justify-center">
          <Image src={Deck} alt="deck"/>
          </div>
          <div className='text-center py-7'>
          <h4 className="font-medium text-[20px]">No Pitch Deck Yet!</h4>
        <p className="text-[14px] text-[#3A383E]">Create Your Pitch Deck Now</p>
          </div>
          <div className="mt-2">
          <Button type='primary' icon='plus' onClick={() => setShowModal(true)}>
            Create Pitch Deck
          </Button>
          </div>
          <Modal isShowing={showModal} hideOnOutsideClick={true} hide={() => setShowModal(false)}
          fullWidth
          title='Pitch Deck'
          >
        <PitchDeckForm 
      hide={() => setShowModal(false)}
      onSubmit={handleSubmit}
        />
      </Modal>
        </div>
      </section>

    </div>
  );
};

export default PitchDeck;

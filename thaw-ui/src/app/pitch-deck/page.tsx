import React from 'react';
import Button from '../../../components/Button';
import PageTitle from '../../../components/PageTitle';
import Image from 'next/image';
import Deck from '../../../assets/pitch_deck.png'
const PitchDeck = () => {
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
            <h2 className='font-general-sans-regular text-2xl text-primary-text'>No Pitch Deck Yet!</h2>
            <p className="font-general-sans-regular text-sm text-secondery-text">Create Your Pitch Deck Now</p>
          </div>
          <div className="mt-2">
          <Button type='primary' icon='plus'>
            Create Pitch Deck
          </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PitchDeck;

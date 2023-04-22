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
import DashboardCard from '../../../components/Dashboard/DashboardCard';
import Dropdown from '../../../components/Dropdown/Dropdown';
const PitchDeck = () => {
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [view, setView] = useState('pitch_deck');
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
    {
      id: 4,
      name: 'John doe',
      created_on: 'May 21,2023',
      last_modified: 'May 24,2023',
      created_by: 'Robert Fox',
    },
    {
      id: 5,
      name: 'John doe',
      created_on: 'May 21,2023',
      last_modified: 'May 24,2023',
      created_by: 'Robert Fox',
    },
    {
      id: 6,
      name: 'John doe',
      created_on: 'May 21,2023',
      last_modified: 'May 24,2023',
      created_by: 'Robert Fox',
    },
  ]);
  const [menuItems] = useState([
    { id: 1, name: 'View Pitch Deck', icon: <Image src={eyeIcon} alt='icon' />, onClick: () => {} },
    { id: 2, name: 'Copy Pitch Deck link', icon: <Image src={linkIcon} alt='icon' />, onClick: () => {} },
    {
      id: 3,
      name: 'Pitch Deck Performance',
      icon: <Image src={chartIcon} alt='icon' />,
      onClick: () => {
        setView('pitch_deck_performance');
      },
    },
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
  const [performanceCards, setPerformanceCards] = useState([
    { title: 'Total Visits', total: '27', percentage: '+2.1%', negativeValue: false, compare: '21' },
    { title: 'Views', total: '45.3 mins', percentage: '+2.1%', negativeValue: false, compare: '21' },
    { title: 'Average Time Spent Viewing', total: '27', percentage: '+2.1%', negativeValue: false, compare: '21' },
    { title: 'Downloaded', total: '27', percentage: '+2.1%', negativeValue: false, compare: '21' },
  ]);
  const [performanceData] = useState([
    {
      id: 1,
      visitors: 'Robert Fox',
      views_count: 21,
      last_viewed: 'May 21,2023',
      downloaded: true,
      time_spend: '5.33',
      viewed_slides: 12 / 12,
    },
    {
      id: 2,
      visitors: 'Robert Fox',
      views_count: 21,
      last_viewed: 'May 21,2023',
      downloaded: true,
      time_spend: '5.33',
      viewed_slides: 12 / 12,
    },
    {
      id: 3,
      visitors: 'Robert Fox',
      views_count: 21,
      last_viewed: 'May 21,2023',
      downloaded: false,
      time_spend: '5.33',
      viewed_slides: 12 / 12,
    },
    {
      id: 4,
      visitors: 'Robert Fox',
      views_count: 21,
      last_viewed: 'May 21,2023',
      downloaded: false,
      time_spend: '5.33',
      viewed_slides: 12 / 12,
    },
    {
      id: 4,
      visitors: 'Robert Fox',
      views_count: 21,
      last_viewed: 'May 21,2023',
      downloaded: false,
      time_spend: '5.33',
      viewed_slides: 12 / 12,
    },
    {
      id: 4,
      visitors: 'Robert Fox',
      views_count: 21,
      last_viewed: 'May 21,2023',
      downloaded: false,
      time_spend: '5.33',
      viewed_slides: 12 / 12,
    },
    {
      id: 4,
      visitors: 'Robert Fox',
      views_count: 21,
      last_viewed: 'May 21,2023',
      downloaded: false,
      time_spend: '5.33',
      viewed_slides: 12 / 12,
    },
    {
      id: 4,
      visitors: 'Robert Fox',
      views_count: 21,
      last_viewed: 'May 21,2023',
      downloaded: false,
      time_spend: '5.33',
      viewed_slides: 12 / 12,
    },
  ]);
  const [columnNames] = useState(['Pitch Deck Name', 'Created On', 'Last Modified', 'Created By']);
  const [performanceColumnNames] = useState([
    'Visitor',
    'Views Count',
    'Last Viewed On',
    'Downloaded',
    'Time Spend',
    'Viewed Slides',
  ]);
  const handleSubmit = (val: any) => {
    console.log({ val });
  };
  const actionBtns = () => {
    return <Menu items={menuItems} />;
  };
  const actionBtnsPerformance = () => {
    const items=menuItems?.filter((itm)=>itm?.name!=='Pitch Deck Performance')
    return <Menu items={items} />;
  };
  return (
    <div className='container'>
      <div className='pt-8 pb-4'>
        {view == 'pitch_deck' ? (
          <PageTitle
            title='Pitch Deck'
            subTitle='Manage your Pitch Decks, or create a new Pitch Deck'
            btnComponent={() => (
              <Button type='primary' icon='plus' onClick={() => setShowModal(true)}>
                New Pitch Deck
              </Button>
            )}
          />
        ) : (
          <PageTitle
            title='Pitch Deck Name'
            subTitle='Track your Pitch Deck performance'
            handleBackIcon={()=>{setView('pitch_deck')}}
            btnComponent={() => (
              <div className='flex'>
                <div>
                  <Dropdown />
                </div>
                <span>{actionBtnsPerformance()}</span>
              </div>
            )}
          />
        )}
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
            {view == 'pitch_deck' ? (
              <>
                <div className='bg-white w-full max-h-[70px]'>
                  <div className='py-2 pl-3 max-w-[275px]'>
                    <Field
                      type='search'
                      label=''
                      name='search_text'
                      placeholder='search pitch decks'
                      onChange={() => {}}
                      value={''}
                    />
                  </div>
                </div>
                <Table items={pitchDecks} cloumnNames={columnNames} actionBtns={actionBtns} />
              </>
            ) : (
              <>
                <div className='flex items-center justify-between mt-4 pb-6 gap-4'>
                  {performanceCards.map((item) => (
                    <DashboardCard
                      key={item.title}
                      title={item.title}
                      total={item.total}
                      compare={item.compare}
                      percentage={item.percentage}
                      negativeValue={item.negativeValue}
                      lg
                    />
                  ))}
                </div>
                {/* ////////////////// */}
                <div className='p-4'>
                  <div className='bg-white w-full max-h-[70px] flex items-center justify-between'>
                    <div className='py-4 px-3  max-w-[275px]'>
                      <h2 className='text-[#1C1C1E] not-italic font-general-sans-regular font-medium text-[16px]'>
                        Visitor Activities
                      </h2>
                    </div>
                    <div className='mr-2'>
                      <Button onClick={() => {}} type='' disabled={true}>
                        Build Audience
                      </Button>
                    </div>
                  </div>
                  <SecondaryTable items={performanceData} columnNames={performanceColumnNames} />
                </div>
              </>
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
                  setShowDeleteModal(false);
                }}
              >
                Cancel
              </Button>
              <Button
                type='danger'
                onClick={() => {
                  setShowDeleteModal(false);
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

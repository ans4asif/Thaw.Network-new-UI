'use client'
import AddAudienceView from "@/components/AddAudienceView/AddAudienceView";
import AudienceBuilder from "@/components/Audience/AudienceBuilder/AudienceBuilder";
import BuildAudienceView from "@/components/BuildAudienceView/BuildAudienceView";
import { ManagedUIContext, useUI } from "@/components/ui/context";
import LoadingDots from "@/components/ui/LoadingDots";
import dynamic from "next/dynamic";
import React from "react";
import { Toaster } from 'react-hot-toast';
function audience() {
  const Loading = () => (
    <div className="w-80 h-80 flex items-center text-center justify-center p-3">
      <LoadingDots />
    </div>
  )
  const dynamicProps = {
    loading: Loading,
  }
  const Modal = dynamic(() => import('@/components/ui/Modal'), {
    ...dynamicProps,
    ssr: false,
  })
  const DeleteView = dynamic(() => import('@/components/DeleteView/DeleteView'), {
    ...dynamicProps,
  })
  
  const ModalView: React.FC<{ modalView: string; closeModal(): any }> = ({
    modalView,
    closeModal,
  }) => {
    return (
      <Modal onClose={closeModal}>
        {modalView === 'DELETE_VIEW' && <DeleteView />}
        {modalView === 'ADDAUDIENCE_VIEW' && <AddAudienceView />}
        {modalView === 'BUILDAUDIENCE_VIEW' && <BuildAudienceView />}
      </Modal>
    )
  }
  const ModalUI: React.FC = () => {
    const { displayModal, closeModal, modalView } = useUI()
    return displayModal ? (
      <ModalView modalView={modalView} closeModal={closeModal} />
    ) : null
  }
  
  return (
    <>
      <ManagedUIContext>
        <AudienceBuilder />
        <ModalUI />
        <Toaster />
      </ManagedUIContext>
    </>
  );
}

export default audience;

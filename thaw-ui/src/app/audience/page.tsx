import AudienceBuilder from "@/components/Audience/AudienceBuilder/AudienceBuilder";
import DeleteModal from "@/components/DeleteView/DeleteView";
import { ManagedUIContext } from "@/components/ui/context";
import LoadingDots from "@/components/ui/LoadingDots";
import dynamic from "next/dynamic";
import React from "react";

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
  // const SignUpView = dynamic(() => import('@components/auth/SignUpView'), {
  //   ...dynamicProps,
  // })
  const ModalView: React.FC<{ modalView: string; closeModal(): any }> = ({
    modalView,
    closeModal,
  }) => {
    return (
      <Modal onClose={closeModal}>
        {modalView === 'DELETE_VIEW' && <DeleteModal />}
      </Modal>
    )
  }
  
  return (
    <>
      <ManagedUIContext>
        <AudienceBuilder />
      </ManagedUIContext>
    </>
  );
}

export default audience;

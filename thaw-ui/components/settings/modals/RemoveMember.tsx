function RemoveMember() {
  return (
    <>
      <input type="checkbox" id="remove-member-modal" className="modal-toggle" />
      <div className="modal">
        <div className="relative bg-white modal-box">
          <label htmlFor="remove-member-modal" className="absolute cursor-pointer right-8 top-6">✕</label>
          <h3 className="text-lg font-bold text-primary-text">Remove Team Member</h3>
          <p className="py-4 text-primary-text">Are you sure you want to remove John William?</p>
          <div className="items-center gap-2 modal-action">
            <label htmlFor='remove-member-modal' className="cursor-pointer text-dashboard-text">Cancel</label>
            <label htmlFor='remove-member-modal' className="text-white cursor-pointer btn btn-error">Delete</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default RemoveMember;
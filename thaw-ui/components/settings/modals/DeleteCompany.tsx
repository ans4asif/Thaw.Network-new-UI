function DeleteCompany() {
  return (
    <>
      <input type="checkbox" id="delete-company-modal" className="modal-toggle" />
      <div className="modal">
        <div className="relative bg-white modal-box">
          <label htmlFor="delete-company-modal" className="absolute cursor-pointer right-8 top-6">✕</label>
          <h3 className="text-lg font-bold text-primary-text">Delete Company</h3>
          <p className="py-4 text-primary-text">Are you sure you want to delete current company?</p>
          <div className="items-center gap-2 modal-action">
            <label htmlFor='delete-company-modal' className="cursor-pointer text-dashboard-text">Cancel</label>
            <label htmlFor='delete-company-modal' className="text-white cursor-pointer btn btn-error">Delete</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default DeleteCompany;
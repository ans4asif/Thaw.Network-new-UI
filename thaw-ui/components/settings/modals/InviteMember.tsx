function InviteMember() {
  return (
    <>
      <input type="checkbox" id="invite-member-modal" className="modal-toggle" />
      <div className="modal">
        <div className="relative bg-white modal-box">
          <label htmlFor="invite-member-modal" className="absolute cursor-pointer right-8 top-6">✕</label>
          <h3 className="text-lg font-bold text-primary-text">Invite a Team Member</h3>
          
          <form className="w-full">
            <div className="w-full form-control">
              <label className="label">
                <span className="label-text text-primary-text">First Name</span>
              </label>
              <input type="text" placeholder="Enter First Name" className="w-full bg-white input input-bordered" />
            </div>
            <div className="w-full form-control">
              <label className="label">
                <span className="label-text text-primary-text">Last Name</span>
              </label>
              <input type="text" placeholder="Enter Last Name" className="w-full bg-white input input-bordered" />
            </div>
            <div className="w-full form-control">
              <label className="label">
                <span className="label-text text-primary-text">Email</span>
              </label>
              <input type="text" placeholder="Enter Email" className="w-full bg-white input input-bordered" />
            </div>
          </form>
          
          <div className="items-center gap-2 modal-action">
            <label htmlFor='invite-member-modal' className="cursor-pointer text-dashboard-text">Cancel</label>
            <label htmlFor='invite-member-modal' className="text-white cursor-pointer btn btn-error">Send Invite</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default InviteMember;
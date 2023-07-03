import "./form.css";

const AddUsersFrom = ({
  title,
  member,
  setMember,
  submitting,
  handleSubmit,
  setOpenModal,
  openModal,
}) => {
  return (
    <div className="tableHeader__dialog_container">
      <dialog className="tableHeader__dialog" open={openModal}>
        <div className="addUsers__card">
          <p className="addUsers__title">{title}</p>
          <form onSubmit={handleSubmit} className="form">
            <label htmlFor="firstName" className="addUsers__input-label">
              <span className="">First Name</span>
            </label>
            <input
              id="firstName"
              value={member.firstName}
              onChange={(e) =>
                setMember({ ...member, firstName: e.target.value })
              }
              placeholder="Enter your first name"
              type="first name"
              required
              className="form__input "
            />
            <label htmlFor="lastName" className="addUsers__input-label">
              <span className="">Last Name</span>
            </label>
            <input
              id="lastName"
              value={member.lastName}
              onChange={(e) =>
                setMember({ ...member, lastName: e.target.value })
              }
              placeholder="Enter your last name"
              type="last name"
              required
              className="form__input "
            />

            <label className="addUsers__input-label" htmlFor="email">
              <span>Email</span>
            </label>
            <input
              id="email"
              type="email"
              value={member.email}
              onChange={(e) => setMember({ ...member, email: e.target.value })}
              placeholder="Enter your email"
              required
              className="form__input "
            />

            <label htmlFor="phone" className="addUsers__input-label">
              <span className="">Phone</span>
            </label>
            <input
              id="phone"
              value={member.phone}
              onChange={(e) => setMember({ ...member, phone: e.target.value })}
              placeholder="Enter your phone"
              type="text"
              required
              className="form__input "
            />
            <label htmlFor="website" className="addUsers__input-label">
              <span className="">Website</span>
            </label>
            <input
              id="website"
              value={member.website}
              onChange={(e) =>
                setMember({ ...member, website: e.target.value })
              }
              placeholder="Enter your website"
              type="text"
              required
              className="form__input "
            />
            <label htmlFor="company_name" className="addUsers__input-label">
              <span className="">Company Name</span>
            </label>
            <input
              id="company_name"
              value={member.company.name}
              onChange={(e) =>
                setMember({ ...member, company: { name: e.target.value } })
              }
              placeholder="Enter your company name"
              type="text"
              required
              className="form__input "
            />

            <div style={{ display: "flex", gap: "10px" }}>
              <button
                onClick={() => setOpenModal(false)}
                className="addUsers__cancel_button"
              >
                Cancel
              </button>
              <button
                className="addUsers__button"
                type="submit"
                // disabled={submitting}
              >
                {title}
                {submitting && <div className="sm-loader" />}
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default AddUsersFrom;

import Link from "next/link";
import "./form.css";

const Form = ({ title, member, setMember, submitting, handleSubmit }) => {
  return (
    <div className="linerGradient">
      <div className="card">
        <div className="loginForm__text">manage courses</div>
        <div className="text">
          <p className="text__title">{title}</p>
          <p className="text__description">
            Enter your credentials to access your account
          </p>
        </div>
        <form onSubmit={handleSubmit} className="form">
          <label className="form__input-label" htmlFor="email">
            <span className="">Email</span>
          </label>

          <input
            id="email"
            type="email"
            value={member.email}
            onChange={(e) => setMember({ ...member, email: e.target.value })}
            placeholder="Enter your email"
            required
            className="form__input"
          />

          <label htmlFor="password" className="form__input-label">
            <span className="">Password</span>
          </label>
          <input
            id="password"
            value={member.password}
            onChange={(e) => setMember({ ...member, password: e.target.value })}
            placeholder="Enter your password"
            type="password"
            required
            className="form__input"
            minLength={6}
          />

          <div>
            <button
              className="form__button"
              type="submit"
              // disabled={submitting}
            >
              {title}
              {submitting && <div className="sm-loader" />}
            </button>
          </div>
        </form>

        <p className="form__footer">
          Forgot your password? <Link href="#"> Reset Password</Link>
        </p>
      </div>
    </div>
  );
};

export default Form;

import { Link } from "react-router-dom";

export default function Register() {
  const onSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
    <div className="login-signup-form animated fadeInDown">
      <div className="form">
        <form onSubmit={onSubmit}>
          <h1 className="title">Register to the App!</h1>
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Password Confirmation" />
          <button className="btn btn-block">Register</button>
          <p className="message">
            Already Registered? <Link to="/login">Login!</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

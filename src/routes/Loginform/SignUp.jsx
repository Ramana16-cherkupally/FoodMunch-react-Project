import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    userEmail: "",
    userPassword: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.userEmail && user.userPassword) {
      alert("Successfully logged in!");
      navigate("/app");
    } else {
      alert("Please enter valid credentials.");
    }
  };
  return (
    <center className="login-container">
      <form onSubmit={handleSubmit}>
        <div className="card loginDetails">
          <h1 className="text-center">SignUp</h1>
          <label htmlFor="userEmail">Email</label>
          <input
            className="inputElement"
            value={user.userEmail}
            onChange={handleChange}
            type="email"
            name="userEmail"
            placeholder="Please enter your Email"
            required
          />
          <label htmlFor="userPassword">Password</label>
          <input
            className="inputElement"
            value={user.userPassword}
            onChange={handleChange}
            type="password"
            name="userPassword"
            placeholder="Please enter password"
            required
          />

          <div className="button-container">
            <button type="submit" className="btn btn-danger submitBtn">
              SignUp
            </button>
          </div>
        </div>
      </form>
    </center>
  );
};

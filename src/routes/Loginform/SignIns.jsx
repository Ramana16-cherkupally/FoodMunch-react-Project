import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const SignIn = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    userName: "",
    userEmail: "",
    userPassword: "",
    userPhoneNumber: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target; // Destructure name and value from event.target
    setUser((prevUser) => ({
      ...prevUser, // Spread the previous user state
      [name]: value, // Dynamically update the field being changed
    }));
  };

  const handleSubmitData = (e) => {
    e.preventDefault();
    alert("successfully Registered your details");
    navigate("/SignUp");
    console.log(user);
    setUser({
      userName: "",
      userEmail: "",
      userPassword: "",
      userPhoneNumber: "",
    });
  };

  return (
    <center className="login-container">
      <form onSubmit={handleSubmitData}>
        <div className="card loginDetails">
          <h1 className="text-center">SignIn</h1>
          <label htmlFor="userName">UserName</label>
          <input
            className="inputElement"
            value={user.userName}
            onChange={handleChange}
            type="text"
            name="userName"
            placeholder="Please enter your name"
            required
          />
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
          <label htmlFor="userPhoneNumber">PhoneNumber</label>
          <input
            className="inputElement"
            value={user.userPhoneNumber}
            onChange={handleChange}
            type="text"
            name="userPhoneNumber"
            maxLength="10"
            placeholder="Please enter a 10-digit mobile number"
            required
          />
          <div className="button-container">
            <button type="submit" className="btn btn-danger submitBtn">
              SignIn
            </button>

            <Link
              to="/signup"
              type="submit"
              className="btn btn-danger submitBtn"
            >
              SignUp
            </Link>
          </div>
        </div>
      </form>
    </center>
  );
};

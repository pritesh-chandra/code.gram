import React, { useState } from "react";
import "./SignUp.styles.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [ errors, setErrors ] = useState(""); // Add this line

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (user.password !== user.confirmPassword) {
      setErrors("Passwords do not match");
      return;
    }
  
    // Here you can handle the user sign up logic (e.g., send the user data to an API)
    console.log(user);
  };

  return (
    <div className="signup-main">
      <nav>
        <Link to={"/"}>
          <h1>coder.gram</h1>
        </Link>
      </nav>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>First Name:</label>
          <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} />
          <label>Last Name:</label>
          <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} />
          <label>Email:</label>
          <input type="email" name="email" placeholder="Email" onChange={handleChange} />
          <label>Username:</label>
          <input type="text" name="username" placeholder="Username" onChange={handleChange} />
          <label>Password:</label>
          <input type="password" name="password" placeholder="Password" onChange={handleChange} />
          {errors && <p className="error">{errors}</p>}
          <label>Confirm Password:</label>
          <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} />
          <div className="btn">
            <button type="submit">Sign Up</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
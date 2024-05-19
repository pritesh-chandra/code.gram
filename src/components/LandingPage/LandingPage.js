import React from "react";
import "./LandingPage.styles.css";
import GitHubIcn from "../../assets/github-icn.png";
// import AppleIcn from "../../assets/apple-icn.png";
// import GoogleIcn from "../../assets/play-store-icn.svg";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

const LandingPage = () => {

    const clientId = "your_client_id";
    const redirectUri = encodeURIComponent("http://localhost:3000");
    const loginUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=user`;
    
    const [ requestData, setRequestData ] = React.useState({});

    const handleUserName = (e) => {
        setRequestData({
            ...requestData,
            userName: e.target.value
        })
    }

    const handlePassword = (e) => {
        setRequestData({
            ...requestData,
            password: e.target.value
        });
    }

    const handleLogin = (e) => {
      e.preventDefault();
    
      // Validate username and password
      if (!requestData.userName) {
        alert("Please enter your username or email");
        return;
      }
    
      if (!requestData.password) {
        alert("Please enter your password");
        return;
      }
    
      // Here you can handle the login logic (e.g., send the requestData to an API)
      console.log(requestData);
    };

  return (
    <div className="main-container">
      <div className="conatiner">
        <div className="title-container">
          <h1>Unlock the World of Code with coder.gram!</h1>
          <p>
            coder.gram is your gateway to a thriving community of coders
            worldwide. Connect, collaborate, and learn from like-minded
            individuals who share your passion for coding. Share your expertise,
            discover exciting opportunities, and level up your coding skills
            with interactive tutorials and challenges. Join coder.gram today and
            unlock endless possibilities in the world of coding!
          </p>
          <div className="button-container">
            <button className="explore-more">Explore More</button>
            <button className="arrow">{">"}</button>
          </div>
        </div>
        <div className="login-container">
          <div className="login-main-div">
            <nav><Link to={"/"}><h1>coder.gram</h1></Link></nav>
            <input type="text" placeholder="username or emailid" onChange={handleUserName} />
            <input type="password" placeholder="password" onChange={handlePassword} />
            <button onClick={handleLogin}>Login</button>
            <div className="login-line">
              <p>OR</p>
            </div>
            <div className="login-with-github">
              <img className="github-icn" src={GitHubIcn} alt="github-logo" />
              <span>
                <a href="#">Log in with GitHub</a>
              </span>
            </div>
            <a className="forgotten-your-password" href="#">
              Frogotten your password?
            </a>
          </div>
          <div className="login-next-div">
            <h3>
              Don't have an account? <nav>
                <Link to="/signup">
                  <a>Sign Up</a>
                </Link>
                </nav>{" "}
            </h3>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;

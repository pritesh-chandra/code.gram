import React from "react";
import "./LandingPage.styles.css";
import GitHubIcn from "../../assets/github-icn.png";
// import AppleIcn from "../../assets/apple-icn.png";
// import GoogleIcn from "../../assets/play-store-icn.svg";
import Footer from "../Footer/Footer";

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
            <h1>coder.gram</h1>
            <input type="text" placeholder="username or emailid" onChange={handleUserName} />
            <input type="password" placeholder="password" onChange={handlePassword} />
            <button>Login</button>
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
              Don't have an account? <a href="#">Sign Up</a>{" "}
            </h3>
          </div>
          {/* <div className="login-app-download-div">
            <h3>Get the app.</h3>
            <div className="app-download-buttons">
              <div className="app-download-btn">
                <div className="app-download-btn-img">
                  <img className="" src={AppleIcn} alt="apple-logo" />
                </div>
                <div className="app-download-btn-text">
                  <p>Download on the</p>
                  <h5>App Store</h5>
                </div>
              </div>
              <div className="app-download-btn">
                <div className="app-download-btn-img">
                  <img src={GoogleIcn} alt="google-play-store-logo" />
                </div>
                <div className="app-download-btn-text">
                  <p>Get it on</p>
                  <h5>Google Play</h5>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;

import React from 'react';
import Logo from '../../assets/Logo.svg';

const MyFeedHeader = () => {
  return (
    <div className='my-feed-header-container'>
        <header className="myFeed-header">
        <img src={Logo} alt="Logo" />
        <input type="text" placeholder="Search" />
        <div className="myFeed-header-right">
          <a href="#">Discuss</a>
          <a href="#">Discover</a>
          <a href="#">Hackathons</a>
        </div>
      </header>
      <div className="myFeed-header-divider" />
    </div>
  )
}

export default MyFeedHeader
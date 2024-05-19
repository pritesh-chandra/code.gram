import React from "react";

const OfficialChannels = ({ officialChannelsData }) => {
  return (
    <div className="official-channel-main-container">
      <div className="official-channels">
        <h1>Official Channels</h1>
        <div className="official-channels-content">
          {officialChannelsData.map((channel, index) => (
            <div key={index} className="official-channels-content-item">
              <img src={channel.logo} alt={`${channel.channel} Logo`} />
              <p>{channel.channel}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OfficialChannels;
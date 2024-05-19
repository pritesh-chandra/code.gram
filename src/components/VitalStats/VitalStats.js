import React from "react";

// Importing the images
import logoleetcode from '../../assets/logo-leetcode.png';

const VitalStats = ({ vitalStatsData }) => {
  return (
    <div className="vital-stats-main-container">
      <div className="vital-stats">
        <h1>Vital Stats</h1>
        {vitalStatsData.map((stats, index) => (
          <div key={index} className="vital-stats-item">
            {Object.entries(stats).map(([name, data]) => (
              <div key={name} className="vital-stats-content">
                <img src={logoleetcode} alt={`${name} Logo`} />
                <div className="vital-stats-content-details">
                  <h5>{data.stars} Stars</h5>
                  <p>
                    {data.problemSolved}/{data.totalProblems} Problems Solved
                  </p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VitalStats;

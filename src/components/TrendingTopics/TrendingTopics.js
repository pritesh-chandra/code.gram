import React from "react";

const TrendingTopics = ({ trendingTopicsData }) => {
  return (
    <div className="trending-topics-main-container">
      <div className="trending-topics">
        <h1>Trending Topics</h1>
        <div className="trending-topics-content">
          {trendingTopicsData.map((topic, index) => (
            <div key={index} className="trending-topics-content-item">
              <p>{topic.topic}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingTopics;

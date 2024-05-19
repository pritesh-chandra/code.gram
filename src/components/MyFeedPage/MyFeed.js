import React, { useState } from "react";
import "./MyFeed.styles.css";
import Logo from "../../assets/Logo.svg";
import Posts from "../Posts/Posts";
import OptionsCol from "../OptionsCol/OptionsCol";
import MyFeedHeader from "../MyFeedHeader/MyFeedHeader";
import AddPostsComp from "../AddPostsComp/AddPostsComp";
import TabsToDisplayDataOnFeed from "../TabsToDisplayDataOnFeed/TabsToDisplayDataOnFeed";
import VitalStats from "../VitalStats/VitalStats";
import TrendingTopics from "../TrendingTopics/TrendingTopics";
import OfficialChannels from "../OfficialChannels/OfficialChannels";
import TopDiscussionsThisWeek from "../TopDiscussionsThisWeek/TopDiscussionsThisWeek";

const MyFeed = () => {
  const [panelActiveTab, setPanelActiveTab] = useState("My Feed");
  const [activeButton, setActiveButton] = useState("Following");
  const userData = [
    {
      username: "user_01",
      profile_pic_url:
        "https://via.placeholder.com/150/FF5733/FFFFFF?text=Profile+Pic+01",
    },
    {
      username: "user_02",
      profile_pic_url:
        "https://via.placeholder.com/150/33FF57/FFFFFF?text=Profile+Pic+02",
    },
    {
      username: "user_03",
      profile_pic_url:
        "https://via.placeholder.com/150/3357FF/FFFFFF?text=Profile+Pic+03",
    },
    {
      username: "user_04",
      profile_pic_url:
        "https://via.placeholder.com/150/FF33A5/FFFFFF?text=Profile+Pic+04",
    },
    {
      username: "user_05",
      profile_pic_url:
        "https://via.placeholder.com/150/A5FF33/FFFFFF?text=Profile+Pic+05",
    },
    {
      username: "user_06",
      profile_pic_url:
        "https://via.placeholder.com/150/FF5733/FFFFFF?text=Profile+Pic+06",
    },
    {
      username: "user_07",
      profile_pic_url:
        "https://via.placeholder.com/150/FF33FF/FFFFFF?text=Profile+Pic+07",
    },
    {
      username: "user_08",
      profile_pic_url:
        "https://via.placeholder.com/150/33FFB5/FFFFFF?text=Profile+Pic+08",
    },
    {
      username: "user_09",
      profile_pic_url:
        "https://via.placeholder.com/150/B533FF/FFFFFF?text=Profile+Pic+09",
    },
    {
      username: "user_10",
      profile_pic_url:
        "https://via.placeholder.com/150/FF5733/FFFFFF?text=Profile+Pic+10",
    },
  ];

  const postData = [
    {
      username: "user_01",
      profile_pic_url:
        "https://via.placeholder.com/150/FF5733/FFFFFF?text=Profile+Pic+01",
      timeStamp: "Sat May 11 2024 03:04:40 GMT+0530",
      code: true,
      postContent: [
        {
          text: "🧑‍💻 I need to do these processes in order but I don't know how to go about doing this in NodeJs. I know this is a simple question but I am new to NodeJs so any help would be appreciated.",
        },
        {
          image: "",
        },
        {
          val: "var pictureID=0; var name2=0; getData(); function getData() { req.pipe(req.busboy); getFile(); function getFile() { req.busboy.on('file', function (fieldname, fi console.log('File [' + fieldname + fileNa",
          title: "NodeJs Callback Issue",
        },
      ],
      hashTags: ["#javascript", "#callback", "#functions"],
      likes: 1902,
      comments: 22,
      shares: 12,
    },
    {
      username: "user_02",
      profile_pic_url:
        "https://via.placeholder.com/150/00FF00/FFFFFF?text=Profile+Pic+02",
      timeStamp: "Sun May 12 2024 08:30:15 GMT+0530",
      image: true,
      postContent: [
        {
          text: "🎉 Excited to announce the launch of my new project! Just finished coding the MVP. Check it out and let me know your thoughts.",
        },
        {
          image:
            "https://via.placeholder.com/500/0000FF/FFFFFF?text=Project+Screenshot",
        },
        {
          image: "",
        },
      ],
      hashTags: ["#project", "#launch", "#coding"],
      likes: 350,
      comments: 15,
      shares: 8,
    },
    {
      username: "user_01",
      profile_pic_url:
        "https://via.placeholder.com/150/FF5733/FFFFFF?text=Profile+Pic+01",
      timeStamp: "Sat May 11 2024 03:04:40 GMT+0530",
      code: true,
      postContent: [
        {
          text: "🧑‍💻 I need to do these processes in order but I don't know how to go about doing this in NodeJs. I know this is a simple question but I am new to NodeJs so any help would be appreciated.",
        },
        {
          image: "",
        },
        {
          val: "var pictureID=0; var name2=0; getData(); function getData() { req.pipe(req.busboy); getFile(); function getFile() { req.busboy.on('file', function (fieldname, fi console.log('File [' + fieldname + fileNa",
          title: "NodeJs Callback Issue",
        },
      ],
      hashTags: ["#javascript", "#callback", "#functions"],
      likes: 1902,
      comments: 22,
      shares: 12,
    },
  ];

  const vitalStatsData = [
    {
      leetcode: {
        problemSolved: 438,
        totalProblems: 1553,
        stars: 2,
      },
      interviewBit: {
        problemSolved: 776,
        totalProblems: 999,
        stars: 4,
      },
      codeSignal: {
        problemSolved: 120,
        totalProblems: 200,
        stars: 3,
      },
      hackerRank: {
        problemSolved: 100,
        totalProblems: 150,
        stars: 4,
      },
      hackerEarth: {
        problemSolved: 50,
        totalProblems: 100,
        stars: 3,
      },
    },
  ];

  const trendingTopicsData = [
    {
      topic: "#javascript",
    },
    {
      topic: "#react",
    },
    {
      topic: "#nodejs",
    },
    {
      topic: "#python",
    },
    {
      topic: "#java",
    },
    {
      topic: "#c++",
    },
    {
      topic: "#c#",
    },
    {
      topic: "#ruby",
    },
    {
      topic: "#php",
    },
    {
      topic: "#angular",
    }
  ];

  const officialChannelsData = [
    {
      channel: "LeetCode",
      logo: "https://via.placeholder.com/150/FF5733/FFFFFF?text=LeetCode",
    },
    {
      channel: "InterviewBit",
      logo: "https://via.placeholder.com/150/33FF57/FFFFFF?text=InterviewBit",
    },
    {
      channel: "CodeSignal",
      logo: "https://via.placeholder.com/150/3357FF/FFFFFF?text=CodeSignal",
    },
    {
      channel: "HackerRank",
      logo: "https://via.placeholder.com/150/FF33A5/FFFFFF?text=HackerRank",
    },
    {
      channel: "HackerEarth",
      logo: "https://via.placeholder.com/150/A5FF33/FFFFFF?text=HackerEarth",
    },
  ]

  return (
    <div className="myFeed-container">
      <MyFeedHeader />
      <div className="myFeed-content">
        <OptionsCol />
        <div className="myFeed-content-col2">
          <AddPostsComp />
          <TabsToDisplayDataOnFeed />
          <Posts postData={postData} />
        </div>
        <div className="myFeed-content-col3">
          <div className="myFeed-col3-contents">
            <VitalStats vitalStatsData={vitalStatsData} />
            <TrendingTopics trendingTopicsData={trendingTopicsData} />
            <OfficialChannels officialChannelsData={officialChannelsData} />
              <TopDiscussionsThisWeek />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyFeed;

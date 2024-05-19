import React from 'react';
import './OptionsCol.styles.css';

// Importing icons
import MyFeedIcn from "../../assets/MyFeedLogoIcon.svg";
import GroupsIcn from "../../assets/Group.svg";
import MessagesIcn from "../../assets/Topic.svg";
import BookmarksIcn from "../../assets/Bookmark.svg";
import MoreIcn from "../../assets/View More.svg";
import NotificationsIcn from "../../assets/Notification.svg";
import SettingsIcn from "../../assets/Settings.svg";

const OptionsCol = () => {
  return (
    <div className="myFeed-content-col1">
          <div className="myFeed-col1-contents">
            <ul>
              <li>
                <img src={MyFeedIcn} alt="my-feed-icon" />
                <a href="#">My Feed</a>
              </li>
              <li>
                <img src={GroupsIcn} alt="groups-icon" />
                <a href="#">Groups</a>
              </li>
              <li>
                <img src={MessagesIcn} alt="Logo" />
                <a href="#">Messages</a>
              </li>
              <li>
                <img src={BookmarksIcn} alt="Logo" />
                <a href="#">Bookmarks</a>
              </li>
              <li>
                <img src={MoreIcn} alt="Logo" />
                <a href="#">More</a>
              </li>
            </ul>
            <div className="myFeed-comp-divider" />
            <div className="myFeed-col1-contents">
              <ul>
                <li>
                  <img src={NotificationsIcn} alt="Logo" />
                  <a href="#">Notifications</a>
                </li>
                <li>
                  <img src={SettingsIcn} alt="Logo" />
                  <a href="#">Settings</a>
                </li>
              </ul>
            </div>
            <div className="myFeed-comp-divider" />
            <div className="myFeed-col1-contents">
              <ul>
                <li>
                  <img src="" alt="Logo" />
                  <a href="#">John Doe</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
  )
}

export default OptionsCol
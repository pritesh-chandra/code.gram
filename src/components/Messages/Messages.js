import React, { useState } from "react";
import "./Messages.styles.css";
import OptionsCol from "../OptionsCol/OptionsCol";
import MyFeedHeader from "../MyFeedHeader/MyFeedHeader";
import moment from "moment";

const Messages = () => {
  const [message, setMessage] = useState('');
  const [conversations, setConversations] = useState([]);

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSend = () => {
    if (message.trim() !== '') {
      setConversations([...conversations, message]);
      setMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  const messages = [
    {
      senderAvatar: 'avatar-url-1',
      senderName: 'John Doe',
      content: 'Hey, how are you doing?',
    },
    {
      senderAvatar: 'avatar-url-2',
      senderName: 'Jane Smith',
      content: 'I’m good, thanks! How about you?',
    },
    // Add more messages as needed
  ];

  const userData = [
    {
      user_id: 1,
      fullName: "John Doe",
      username: "@john_doe",
      profile_pic_url:
        "https://via.placeholder.com/150/3357FF/FFFFFF?text=Profile+Pic+01",
      message: "Lorem Ipsum...",
      timeStamp: "Sun May 11 2024 11:46:45 GMT+0530",
    },
    {
      user_id: 2,
      fullName: "Jane Doe",
      username: "@jane_doe",
      profile_pic_url:
        "https://via.placeholder.com/150/3357FF/FFFFFF?text=Profile+Pic+02",
      message: "Lorem Ipsum...",
      timeStamp: "Sun May 10 2024 11:46:45 GMT+0530",
    },
    {
      user_id: 3,
      fullName: "John Doe",
      username: "@john_doe",
      profile_pic_url:
        "https://via.placeholder.com/150/3357FF/FFFFFF?text=Profile+Pic+01",
      message: "Lorem Ipsum...",
      timeStamp: "Sun May 01 2024 11:46:45 GMT+0530",
    },
  ];

  const messageData = [
    {
      message_id: 1,
      sender_id: "@john_doe",
      receiver_id: "@jane_doe",
      content: "Lorem Ipsum...",
      timeStamp: "Sun May 11 2024 11:46:45 GMT+0530",
      status: "unread",
    },
    {
      message_id: 2,
      sender_id: "@john_doe",
      receiver_id: "@jane_doe",
      content: "Lorem Ipsum...",
      status: "read",
      timeStamp: "Sun May 10 2024 11:46:45 GMT+0530",
    },
    {
      message_id: 3,
      sender_id: "@john_doe",
      receiver_id: "@jane_doe",
      content: "Lorem Ipsum...",
      status: "unread",
      timeStamp: "Sun May 01 2024 11:46:45 GMT+0530",
    },
  ];

  return (
    <div className="messages-container">
      <MyFeedHeader />
      <OptionsCol />
      <div className="messages-main-container">
        <div className="messages-list">
          <div className="search-convo">
            <input type="text" placeholder="Search conversation" />
          </div>
          <div className="conversations">
            {messageData.map((message, index) => {
              const user = userData.find(
                (user) => user.username === message.sender_id
              );

              const isUnread = message.status === "unread";

              return (
                <div
                  className={"conversation" + (isUnread ? " unread" : "")}
                  key={message.id}
                >
                  <div className="conversation-img">
                    <img
                      src={user.profile_pic_url}
                      alt={`${user.fullName} Profile Pic`}
                    />
                  </div>
                  <div className="conversation-info">
                    <h3>{user.fullName}</h3>
                    <div className={"conversation-message" + (isUnread ? " unread-message" : "")}>
                      <p>{message.content}</p>
                      <p className="timestamp">
                        {moment(message.timeStamp).fromNow()}
                      </p>
                    </div>
                  </div>
                  {isUnread && <div className="unread-indicator"></div>}
                </div>
              );
            })}
          </div>
        </div>
        <div className="messages-content">
          <header className="message-header">
            <div className="message-header-img">
              <img
                src="https://via.placeholder.com/150/3357FF/FFFFFF?text=Profile+Pic+01"
                alt="Profile Pic"
              />
            </div>
            <div className="message-header-info">
              <h3>John Doe</h3>
              <p>@john_doe</p>
            </div>
          </header>
          <div className="conversations-content">
          {conversations.map((message, index) => (
          <p key={index}>{message}</p>
        ))}
          </div>
          <div className="message-input">
            <input type="text" placeholder="Type a message" value={message} onChange={handleInputChange} onKeyPress={handleKeyPress} />
            <button onClick={handleSend}>Send</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;

import React from "react";
import { CodeBlock, dracula } from "react-code-blocks";
import moment from 'moment'; 
import './Posts.styles.css';
import MessageIcn from '../../assets/Topic.svg';
import Like from '../../assets/Facebook White.svg';
import Share from '../../assets/Forward Arrow.svg';

const Posts = ({ postData }) => {
  return (
    <div className="myFeed-col2-contents-posts">
      {postData.map((post, index) => (
        <div className="myFeed-col2-contents-post" key={index}>
          <div className="myFeed-col2-contents-post-header">
            <div className="post-header-left">
              <img src={post.profile_pic_url} alt="Profile Pic" />
              <div className="post-header-left-details">
                <h1>{post.username}</h1>
                <p>{moment(post.timeStamp).fromNow()}</p>{" "}
              </div>
            </div>
            <div className="post-header-right">
              <img src="" alt="More" />
            </div>
          </div>
          <div className="myFeed-col2-contents-post-content">
            <p>{post.postContent[0].text}</p>
            {post.code ? (
              <div className="post-content-code">
                <div className="post-content-code-header">
                  <p>NodeJs Callback Issue</p>
                  <p>Copy</p>
                </div>
                <CodeBlock
                  text={post.postContent[2].val}
                  language={"javascript"}
                  showLineNumbers={true}
                  theme={dracula}
                  wrapLines
                  className="code-block"
                  customStyle={{
                    maxWidth: "700px",
                  }}
                />
                <div className="post-content-code-footer">
                  <button>Read All</button>
                </div>
              </div>
            ) : (
              <img src={post.postContent[1].image} alt="Post Image" />
            )}
          </div>
          <div className="post-content-foot">
          <div className="post-content-hashtags">
            {post.hashTags.map((hashTag, index) => (
              <React.Fragment key={index}>
                <a href="#">{hashTag}</a>
                {"  "}
              </React.Fragment>
            ))}
          </div>
          <div className="post-content-actions">
            <button>
              <img src={Like} alt="Heart" />
              <span>{post.likes}</span>
            </button>
            <button>
              <img src={MessageIcn} alt="Comment" />
              <span>{post.comments}</span>
            </button>
            <button>
              <img src={Share} alt="Share" />
              <span>{post.shares}</span>
            </button>
          </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;

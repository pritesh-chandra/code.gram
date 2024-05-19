import React from 'react';

// Importing the images
import CameraIcn from "../../assets/Camera.svg";
import CodeIcn from "../../assets/Code.svg";
import SentIcn from "../../assets/Sent.svg";
import MoreViewIcn from "../../assets/Group 15.svg";

const AddPostsComp = () => {
  return (
    <div className='add-posts-main-container'>
        <div className="myFeed-col2-contents-add-posts">
            <div className="add-posts-input">
              <textarea type="text" placeholder="New Post..." />
            </div>
            <div className="add-posts-options">
              <div className="add-posts-options-left">
                <a href="#">
                  <img src={CodeIcn} alt="Add Image" />
                </a>
                <a href="#">
                  <img src={CameraIcn} alt="Add Image" />
                </a>
                <a href="#">
                  <img src={MoreViewIcn} alt="Add Image" />
                </a>
              </div>
              <div className="add-posts-options-right">
                <a href="#">
                  <img src={SentIcn} alt="Add Image" />
                </a>
              </div>
            </div>
          </div>
    </div>
  )
}

export default AddPostsComp
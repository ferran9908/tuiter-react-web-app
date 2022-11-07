import React from "react";
const TuitStats = ({ liked, replies, retuits, likes }) => {
  return (
    <div className="row wd-margin-top">
      <div className="col-3 wd-navbar">
        <a className="wd-hyperlink-grey" href="/tuiter/home">
          <i className="bi bi-chat-fill wd-margin-right"></i>
          {replies}
        </a>
      </div>
      <div className="col-3 wd-navbar">
        <a className="wd-hyperlink-grey" href="/tuiter/home">
          <i className="bi bi-arrow-up-left-square wd-margin-right"></i>
          {retuits}
        </a>
      </div>
      <div className="col-3 wd-navbar">
        <a className="wd-hyperlink-grey" href="/tuiter/home">
          <i
            className={`bi bi-heart wd-icon wd-margin-right ${
              liked ? "wd-liked" : ""
            }`}
          ></i>
          {likes}
        </a>
      </div>
      <div className="col-3 wd-navbar">
        <a className="wd-hyperlink-grey" href="/tuiter/home">
          <i className="bi bi-box-arrow-up wd-icon wd-margin-right"></i>
        </a>
      </div>
    </div>
  );
};

export default TuitStats;

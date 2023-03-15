import { Avatar } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";

function Sidebar() {
  const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">
        <EqualizerIcon />
      </span>
      <p>{topic}</p>
    </div>
  );
  const groupItem = (topic) => (
    <div className="sidebar__groupItem">
      <span className="sidebar__gropuhash">
        <EqualizerIcon />
      </span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MXwxMjA3fD88MHxLeHBsb3JLLWZwR8MXx8fGVufD88fHw%3d&w=1000&q=80"
          alt="safwan"
        />
        <Avatar src={user.photoUrl} className="sidebar__avatar">
          {user.email[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,543</p>
        </div>
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,448</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("react js")}
        {recentItem("programming")}
        {recentItem("softwareengineering")}
        {recentItem("desing")}
        {recentItem("developer")}
      </div>
      <div className="sidebar__bottom2">
        <p>Group</p>
        {groupItem("React Native")}
        {groupItem("Java Developers ")}
      </div>
      <div className="sidebar__bottom3">
        <p>Events</p>
      </div>
      <div className="sidebar__bottom4">
        <p>Followed Hashtags</p>
      </div>
    </div>
  );
}

export default Sidebar;

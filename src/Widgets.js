import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("Safwan is back", "Top news headline")}
      {newsArticle("Safwan is back", "Top news Program")}
      {newsArticle("Safwan is back", "Top news  Cars, collect")}
      {newsArticle("Safwan is back", "Top news Love")}
      {newsArticle("Safwan is back", "Top news Love for someone")}
      {newsArticle("Safwan is back", "Top news headline")}
    </div>
  );
}

export default Widgets;

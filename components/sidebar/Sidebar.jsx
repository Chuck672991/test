import React from "react";
import "./Sidebar.css";
import { RiHome5Line } from "react-icons/ri";
const Sidebar = () => {
  return (
    <div className="side-main">
      <div className="photo-div">
        <div className="pd-child">
          <img src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
          <div className="profile-info">
            <h1>Abdullah</h1>
            <p>Project Manages</p>
            <h1>Abdullah</h1>
            <p>Project Manages</p><h1>Abdullah</h1>
            <p>Project Manages</p><h1>asim</h1>
            <p>Project Manages</p><h1>Abdullah</h1>
            <p>Project Manages</p>
          </div>
        </div>
        <div className="numbers">12345</div>
      </div>
      <div className="routes-div">
        <div className="all-routes">
          <div className="routes btn">
            <RiHome5Line  size={"30px"}/>
            <h4>Home</h4>
          </div>
          <div className="routes">
            <RiHome5Line size={"30px"}/>
            <h4>Home</h4>
          </div>
          <div className="routes">
            <RiHome5Line size={"30px"}/>
            <h4>Home</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Sidebar from "./Sidebar";

function MenuRight() {
  return (
    <div className="navbar-menu-right">
      <a href="#" style={{ marginRight: 20, position: "relative" }}>
        <img
          src="/icons/ic_notif.png"
          style={{ width: 30, height: 30 }}
          alt="icon-notif"
        />
        <div
          style={{
            width: 15,
            height: 15,
            position: "absolute",
            top: -20,
            right: -5,
            borderRadius: 2,
            background: "red",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span style={{ color: "white", fontSize: 10 }}>1</span>
        </div>
      </a>
      <a href="#">
        <img
          src="/img_dummy.jpg"
          style={{ width: 35, borderRadius: 100 }}
          alt="user-profile"
        />
      </a>
    </div>
  );
}

export default function Navbar() {
  const [isShowSidebar, setIsShowSidebar] = useState(false);

  const showSideBar = () => {
    setIsShowSidebar(!isShowSidebar);
  };

  return (
    <>
      {isShowSidebar ? <Sidebar isSidebarMobile={true} /> : <></>}
      <div className="navbar">
        <div className="container">
          <a href="/">
            <img
              src="https://files-id.codemi.co.id/files/learning/image/68c3ec1a6c5d155d748cde836d0289cb"
              alt="logo-codemi"
            />
          </a>
          <div className="menu-toggle" onClick={() => showSideBar()}>
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
          </div>
          <MenuRight />
        </div>
      </div>
    </>
  );
}

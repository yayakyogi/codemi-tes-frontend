import React from "react";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <img
          src="https://files-id.codemi.co.id/files/learning/image/68c3ec1a6c5d155d748cde836d0289cb"
          alt="logo-codemi"
        />
        <div>
          <a href="/aa" style={{ marginRight: 20, position: "relative" }}>
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
          <a href="/#">
            <img
              src="https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg"
              style={{ width: 35, borderRadius: 100 }}
              alt="user-profile"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

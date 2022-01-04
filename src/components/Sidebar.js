import ItemSidebar from "./ItemSidebar";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h1 className="title">HOME</h1>
      {/* Menu LEARNING */}
      <div className="menu">
        <h2 className="sub-title">LEARNING</h2>
        <ItemSidebar
          img="icons/ic_notif.png"
          title="Courses"
          showCounter={true}
          count={10}
        />
        <ItemSidebar
          img="icons/ic_notif.png"
          title="Learning Plants"
          showCounter={false}
        />
      </div>
      {/* Menu LMANAGE */}
      <div className="menu">
        <h2 className="sub-title">MANAGE</h2>
        <ItemSidebar
          img="icons/ic_notif.png"
          title="User"
          showCounter={false}
        />
        <ItemSidebar
          img="icons/ic_notif.png"
          title="Skills"
          showCounter={false}
        />
        <ItemSidebar
          img="icons/ic_notif.png"
          title="Reports"
          showCounter={false}
        />
        <ItemSidebar
          img="icons/ic_notif.png"
          title="Analytics"
          showCounter={false}
        />
        <ItemSidebar
          img="icons/ic_notif.png"
          title="Announcements"
          showCounter={false}
        />
      </div>
      {/* Menu CONFIGURE */}
      <div className="menu">
        <h2 className="sub-title">CONFIGURE</h2>
        <ItemSidebar
          img="icons/ic_notif.png"
          title="Points"
          showCounter={false}
        />
        <ItemSidebar
          img="icons/ic_notif.png"
          title="Reward"
          showCounter={false}
        />
        <ItemSidebar
          img="icons/ic_notif.png"
          title="Email templates"
          showCounter={false}
        />
        <ItemSidebar
          img="icons/ic_notif.png"
          title="Company info"
          showCounter={false}
        />
        <ItemSidebar
          img="icons/ic_notif.png"
          title="Billing"
          showCounter={false}
        />
      </div>
      <div style={{ height: 200 }}></div>
    </div>
  );
}

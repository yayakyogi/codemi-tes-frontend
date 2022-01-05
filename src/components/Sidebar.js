import ItemSidebar from "./ItemSidebar";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h1 className="title">HOME</h1>
      {/* Menu LEARNING */}
      <div className="menu">
        <h2 className="sub-title">WORLD</h2>
        <ItemSidebar
          img="icons/ic_notif.png"
          title="Courses"
          showCounter={false}
        />
        <ItemSidebar
          img="icons/ic_notif.png"
          title="Learning Plants"
          showCounter={false}
        />
      </div>
      <div style={{ height: 200 }}></div>
    </div>
  );
}

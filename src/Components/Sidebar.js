import { Link } from "react-router-dom";
import ItemSidebar from "./ItemSidebar";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h1 className="title">HOME</h1>
      {/* Menu LEARNING */}
      <div className="menu">
        <h2 className="sub-title">DATA COVID 19</h2>
        <Link to="/" style={{ textDecoration: "none" }}>
          <ItemSidebar
            img="icons/ic_world_map.png"
            title="World"
            showCounter={false}
          />
        </Link>
        <Link to="/countries" style={{ textDecoration: "none" }}>
          <ItemSidebar
            img="icons/ic_flag.png"
            title="Indonesia"
            showCounter={false}
          />
        </Link>
      </div>
      <div style={{ height: 200 }}></div>
    </div>
  );
}

import { Link } from "react-router-dom";
import propTypes from "prop-types";
import ItemSidebar from "./ItemSidebar";

export default function Sidebar(props) {
  const { isSidebarMobile } = props;

  return (
    <div className={isSidebarMobile ? "sidebar-mobile" : "sidebar"}>
      <h1 className="title">HOME</h1>
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
      {isSidebarMobile && (
        <>
          <h1 className="title">User</h1>
          <div className="menu">
            <ItemSidebar
              img="icons/ic_notif.png"
              title="Notification"
              showCounter={true}
              count={1}
            />
            <ItemSidebar
              img="icons/ic_user.png"
              title="Akun"
              showCounter={false}
            />
          </div>
        </>
      )}
      <div style={{ height: 200 }}></div>
    </div>
  );
}

Sidebar.propTypes = {
  isSidebarMobile: propTypes.bool,
};

// import ropTypes from "prop-types";
import propTypes from "prop-types";

export default function MenuHeader(props) {
  const {
    title,
    total = "0",
    index = 0,
    update = "",
    selectedItem = 0,
    onPress,
  } = props;
  return (
    <button
      className="item-menu"
      style={{ opacity: index === selectedItem ? 1 : 0.5 }}
      onClick={onPress}
    >
      <div
        style={{
          backgroundColor: index === selectedItem ? "green" : "white",
          height: 3,
          position: "absolute",
          width: "100%",
          top: 0,
          left: 0,
        }}
      ></div>
      <span style={{ color: "black", fontSize: 20, fontWeight: 500 }}>
        {title}
      </span>
      <br />
      <span style={{ color: "black", fontSize: 50, fontWeight: 600 }}>
        {total}
      </span>
      <br />
      <span style={{ color: "gray", fontSize: 15 }}>{update}</span>
    </button>
  );
}

MenuHeader.propTypes = {
  title: propTypes.string.isRequired,
  total: propTypes.string,
  update: propTypes.string,
  index: propTypes.number,
  selectedItem: propTypes.number,
  onPress: propTypes.func,
};

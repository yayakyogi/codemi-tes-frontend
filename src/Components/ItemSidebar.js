import propTypes from "prop-types";

export default function ItemSidebar(props) {
  const { img, alt, title, count, showCounter } = props;
  return (
    <div className="item">
      <div className="sub-item1">
        <img
          src={img}
          style={{ width: 17, height: 15, marginRight: 10 }}
          alt={alt}
        />
        <p style={{ fontSize: 18, color: "gray" }}>{title}</p>
      </div>
      {showCounter ? (
        <div className="count">
          <p style={{ color: "white", fontSize: 13 }}>{count}</p>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

ItemSidebar.propTypes = {
  img: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  alt: propTypes.string,
  count: propTypes.number,
  showCounter: propTypes.bool,
};

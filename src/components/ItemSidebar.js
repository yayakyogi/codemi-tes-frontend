import PropTypes from "prop-types";

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
        <p style={{ fontSize: 16 }}>{title}</p>
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
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  alt: PropTypes.string,
  count: PropTypes.number,
  showCounter: PropTypes.bool,
};

import propTypes from "prop-types";

export default function ItemPageActive(props) {
  const { isLast, pageActive, activeUser } = props;
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a href="#">
      <div className="page-active-user">
        <p style={{ fontWeight: 700, fontSize: 15 }}>
          {pageActive.length > 20
            ? pageActive.slice(0, 20) +
              "..." +
              pageActive.slice(pageActive.length - 3)
            : pageActive}
        </p>
        <p style={{ fontWeight: 700, fontSize: 15 }}>{activeUser}</p>
      </div>
      {isLast ? <div></div> : <div className="line"></div>}
    </a>
  );
}

ItemPageActive.propTypes = {
  isLast: propTypes.bool,
  pageActive: propTypes.string,
  activeUser: propTypes.string,
};

import propTypes from "prop-types";

export default function ItemPageActive(props) {
  const { isTitle, isLast, pageActive, activeUser } = props;
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a href="#">
      <div className="page-active-user">
        <p style={{ fontWeight: isTitle ? 400 : 700, fontSize: 15 }}>
          {pageActive.length > 20
            ? pageActive + "..." + pageActive.slice(pageActive.length - 7)
            : pageActive}
        </p>
        <p style={{ fontWeight: isTitle ? 400 : 700, fontSize: 15 }}>
          {activeUser}
        </p>
      </div>
      {isLast ? <div></div> : <div className="line"></div>}
    </a>
  );
}

ItemPageActive.propTypes = {
  isTitle: propTypes.bool,
  isLast: propTypes.bool,
  pageActive: propTypes.string,
  activeUser: propTypes.string,
};

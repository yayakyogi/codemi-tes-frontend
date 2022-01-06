import propTypes from "prop-types";

export default function Layout(props) {
  const { children, title } = props;
  return (
    <div className="content">
      <h1>{title}</h1>
      <div className="wrap">{children}</div>
    </div>
  );
}

Layout.propTypes = {
  title: propTypes.string,
  children: propTypes.node,
};

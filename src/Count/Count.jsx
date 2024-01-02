import PropTypes from "prop-types";
const Count = ({ count }) => {
  return (
    <div>
      <p>{count}</p>
    </div>
  );
};

Count.propTypes = {
  count: PropTypes.number
};

export default Count;
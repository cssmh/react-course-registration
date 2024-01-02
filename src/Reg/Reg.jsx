import PropTypes from "prop-types";
const Reg = ({ data }) => {
  const { name } = data;
  return (
    <div>
      <h3>{name}</h3>
    </div>
  );
};

Reg.propTypes = {
  data: PropTypes.object,
};

export default Reg;
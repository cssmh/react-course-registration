import PropTypes from "prop-types";
import { FaDollarSign } from "react-icons/fa";
import { IoBookOutline } from "react-icons/io5";
const Course = ({ getCourse, handleAddCourse }) => {
  //   console.log(getCourse);
  const { image, name, price, credit_fee, course_details } = getCourse;
  return (
    <div className="p-4 bg-[#fff] rounded-lg">
      <img src={image} alt={`Picture of ${name} is not found, sorry!`} />
      <h1 className="text-lg font-semibold my-2">{name}</h1>
      <p className="text-xs text-[#1C1B1B99] ">{course_details}</p>
      <div className="flex justify-between my-4">
        <div className="flex items-center text-sm">
          <FaDollarSign />
          <p className="text-[#1C1B1B99] ml-2">Price: {price}</p>
        </div>
        <div className="flex items-center text-sm">
          <IoBookOutline />
          <p className="text-[#1C1B1B99] ml-2">Credit: {credit_fee}hr</p>
        </div>
      </div>
      <button
        onClick={() => handleAddCourse(getCourse, credit_fee, price )}
        className="text-center bg-[#2F80ED] rounded-[7px] w-full text-white py-1"
      >
        Select
      </button>
    </div>
  );
};

Course.propTypes = {
  getCourse: PropTypes.object,
  handleAddCourse: PropTypes.func,
};

export default Course;

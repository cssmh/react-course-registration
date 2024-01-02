import PropTypes from "prop-types";
import Reg from "../Reg/Reg";
import Count from "../Count/Count";
const Registration = ({ allData, totalCredit, totalPrice, count }) => {
  return (
    <div className="1/4">
      <div className="px-6 bg-[#fff] pt-2 pb-4 rounded-lg">
        <h2 className="text-sm text-center text-[#2F80ED] font-bold my-3 pb-3 border-b-2">
          Credit Hour Remaining {20 - totalCredit} hr
        </h2>
        <h1 className="text-lg font-bold mb-2">Course Name</h1>
        <div className="text-[#1C1B1B99] border-b-2 pb-4">
          <div className="flex gap-1">
            <div>
              {count.map((count, idx) => (
                <Count key={idx} count={count}></Count>
              ))}
            </div>
            <div>
              {allData.map((data) => (
                <Reg key={data.id} data={data}></Reg>
              ))}
            </div>
          </div>
        </div>
        <p className="py-3 border-b-2">Total Credit Hour : {totalCredit}</p>
        <p className="mt-4">Total Price : {totalPrice} USD</p>
      </div>
    </div>
  );
};

Registration.propTypes = {
  allData: PropTypes.array,
  totalCredit: PropTypes.number,
  totalPrice: PropTypes.number,
  count: PropTypes.array,
};

export default Registration;

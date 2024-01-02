import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import "./App.css";
import Courses from "./Courses/Courses";
import Header from "./Header/Header";
import Registration from "./Registration/Registration";

function App() {
  const [data, setData] = useState([]);
  const [credit, setCredit] = useState(0);
  const [price, setPrice] = useState(0);
  const [count, setCount] = useState([]);

  const handleAddCourse = (fullCourse, credit_fee, getPrice) => {
    const checkSame = data.find((solo) => solo.id === fullCourse.id);
    // Everything is working on this condition
    if (!checkSame && credit + credit_fee < 21) {
      setCount([...count, count.length + 1]);
      const totalPrice = price + getPrice;
      setPrice(totalPrice);
      const newData = [...data, fullCourse];
      setData(newData);
      const totalCredit = credit + credit_fee;
      setCredit(totalCredit);
    }
    if (checkSame) {
      Alert();
    }
    if (credit + credit_fee > 20) {
      secondAlert();
    }
  };
  // Toastify alert call function there if else, btn in course.jsx
  const Alert = () => toast("Course already Selected!");
  const secondAlert = () => toast("Out of credit limit!");
  // Toastify alert + there <ToastContainer />

  return (
    <>
      <div className="max-w-[1180px] mx-auto">
        <ToastContainer />
        <Header></Header>
        <div className="flex gap-4">
          <Courses handleAddCourse={handleAddCourse}></Courses>
          <Registration
            allData={data}
            totalCredit={credit}
            totalPrice={price}
            count={count}
          ></Registration>
        </div>
      </div>
    </>
  );
}

export default App;

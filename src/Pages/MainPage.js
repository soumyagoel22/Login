import React, { useState } from "react";
import { fetch1 } from "../Data/Fetch1";
import { fetch2 } from "../Data/Fetch2";
import FetchData1 from "../Data/FetchData1";
import FetchData2 from "../Data/FetchData2";

const MainPage = ({ setIsLoggedIn, name }) => {
  const [isTextBox1, setIsTextBox1] = useState(true);
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const onLogout = () => {
    setIsLoggedIn(true);
  };

  const onHandle1 = () => {
    setIsTextBox1(true);
    fetch1({ setData1 });
  };

  const onHandle2 = () => {
    setIsTextBox1(false);
    fetch2({ setData2 });
  };

  return (
    <>
      <div className="header">
        <button>{name}</button>
        <button onClick={onHandle1}>TextBox 1</button>
        <button onClick={onHandle2}>TextBox 2</button>
        <button onClick={onLogout}>Logout</button>
      </div>
      <div className="content">
        {isTextBox1 ? (
          <FetchData1 data1={data1} />
        ) : (
          <FetchData2 data2={data2} />
        )}
      </div>
    </>
  );
};

export default MainPage;

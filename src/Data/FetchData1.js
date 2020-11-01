import React from "react";

const FetchData1 = ({ data1 }) => {
  return (
    <>
      {data1.length
        ? data1.map(({ name, char_id, img }) => (
            <div key={char_id} className="post">
              <img src={img} alt="logo" />
              <div>{name}</div>
            </div>
          ))
        : null}
    </>
  );
};

export default FetchData1;

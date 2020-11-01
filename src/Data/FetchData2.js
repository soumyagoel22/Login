import React from "react";

const FetchData2 = ({ data2 }) => {
  return (
    <>
      {data2.length
        ? data2.map(({ name, char_id, img }) => (
            <div key={char_id} className="post">
              <img src={img} alt="logo" />
              <div>{name}</div>
            </div>
          ))
        : null}
    </>
  );
};

export default FetchData2;

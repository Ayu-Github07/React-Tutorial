import React, { useState } from "react";
import "./style.css";

export default function UseState() {
  const initialData = 0;
  const [myNum, setMyNum] = useState(initialData);

  console.log(myNum);

  return (
    <>
      <div className="center_div">
        <p>{myNum}</p>
        <div className="button2" onClick={() => setMyNum(myNum + 1)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCREMENT
        </div>
        <div
          className="button2"
          onClick={() => (myNum > 0 ? setMyNum(myNum - 1) : 0)}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          DECREMENT
        </div>
      </div>
    </>
  );
}

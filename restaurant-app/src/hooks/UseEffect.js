import React, { useState, useEffect } from "react";
import "./style.css";

export default function UseEffect() {
  const initialData = 0;
  const [myNum, setMyNum] = useState(initialData);

  useEffect(() => {
    document.title = `Chats(${myNum})`;
  });

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
      </div>
    </>
  );
}

import React, { useState } from "react";
import "../css/App.css";

function LoadAiPrediction({ setLoginStatus }) {
  const onClickButton = () => {
    let body = { a: "b" };
    console.log("hi");
    fetch("https://server-real.herokuapp.com/loadAiPrediction", {
      //fetch("http://localhost:4000/bitcoininfo", {
      method: "post", // 통신방법
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <>
      <button
        type="button"
        onClick={onClickButton}
        className="button"
        style={{ top: "10%", position: "relative" }}
      >
        Load Ai Prediction
      </button>
    </>
  );
}

export default LoadAiPrediction;

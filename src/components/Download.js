import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import JSONToCSVConvertor from "./JSONToCSVConvertor";
import "../css/App.css";
import LoadAiPrediction from "./LoadAiPrediction";

// data download하는 component
function Download({ setLoginStatus }) {
  // download path
  const [userInfoPath, setUserInfoPath] = useState("");
  const [groupInfoPath, setGroupInfoPath] = useState("");
  const [predictionInfoPath, setPredictionInfoPath] = useState("");
  const [bitcoinInfoPath, setBitcoinInfoPath] = useState("");

  // db datas
  const [userInfo, setUserInfo] = useState("");
  const [groupInfo, setGroupInfo] = useState("");
  const [predictionInfo, setPredictionInfo] = useState("");
  const [bitcoinInfo, setBitcoinInfo] = useState("");

  const navigate = useNavigate();

  // input data 의 변화가 있을 때마다 value 값을 변경해서 useState 해준다
  const handleUserInfoPath = (e) => {
    setUserInfoPath(e.target.value);
  };

  const handleGroupInfoPath = (e) => {
    setGroupInfoPath(e.target.value);
  };

  const handlePredictionInfoPath = (e) => {
    setPredictionInfoPath(e.target.value);
  };

  const handleBitcoinInfoPath = (e) => {
    setBitcoinInfoPath(e.target.value);
  };

  // 네 개의 테이블에 대해, load 버튼과 download 버튼을 눌렀을 때의 실행 함수

  // load 버튼을 눌렀을 때 실행되는 함수
  const onClickUserInfo = () => {
    let body = {
      path: userInfoPath,
    };

    // fetch를 통해 버튼 누른 시점의 db 불러오기
    fetch("https://server-real.herokuapp.com/userinfo", {
      //fetch("http://localhost:4000/userinfo", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((res) => {
        setUserInfo(res);
        if (res) {
          return alert("정보를 성공적으로 불러왔습니다.");
        } else {
          return alert("정보를 불러오지 못했습니다.");
        }
      });
  };

  // download 버튼을 눌렀을 때 실행되는 함수
  const onClickUserInfoDownload = () => {
    if (userInfoPath) {
      JSONToCSVConvertor(userInfo, userInfoPath, "Yes");
    } else {
      JSONToCSVConvertor(userInfo, "userinfo", "Yes");
    }
  };

  const onClickGroupInfo = () => {
    let body = {
      path: groupInfoPath,
    };
    fetch("https://server-real.herokuapp.com/groupinfo", {
      //fetch("http://localhost:4000/groupinfo", {
      method: "post", // 통신방법
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((res) => {
        setGroupInfo(res);
        if (res) {
          return alert("정보를 성공적으로 불러왔습니다.");
        } else {
          return alert("정보를 불러오지 못했습니다.");
        }
      });
  };

  const onClickGroupInfoDownload = () => {
    if (groupInfoPath) {
      JSONToCSVConvertor(groupInfo, groupInfoPath, "Yes");
    } else {
      JSONToCSVConvertor(groupInfo, "groupinfo", "Yes");
    }
  };

  const onClickPredictionInfo = () => {
    let body = {
      path: predictionInfoPath,
    };

    fetch("https://server-real.herokuapp.com/predictioninfo", {
      //fetch("http://localhost:4000/predictioninfo", {
      method: "post", // 통신방법
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((res) => {
        setPredictionInfo(res);
        if (res) {
          return alert("정보를 성공적으로 불러왔습니다.");
        } else {
          return alert("정보를 불러오지 못했습니다.");
        }
      });
  };

  const onClickPredictionInfoDownload = () => {
    if (predictionInfoPath) {
      JSONToCSVConvertor(predictionInfo, predictionInfoPath, "Yes");
    } else {
      JSONToCSVConvertor(predictionInfo, "predictionInfo", "Yes");
    }
  };

  const onClickBitcoinInfo = () => {
    let body = {
      path: bitcoinInfoPath,
    };

    fetch("https://server-real.herokuapp.com/bitcoininfo", {
      //fetch("http://localhost:4000/bitcoininfo", {
      method: "post", // 통신방법
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((res) => {
        setBitcoinInfo(res);
        if (res) {
          return alert("정보를 성공적으로 불러왔습니다.");
        } else {
          return alert("정보를 불러오지 못했습니다.");
        }
      });
  };

  const onClickBitcoinInfoDownload = () => {
    if (bitcoinInfoPath) {
      JSONToCSVConvertor(bitcoinInfo, bitcoinInfoPath, "Yes");
    } else {
      JSONToCSVConvertor(bitcoinInfo, "bitcoininfo", "Yes");
    }
  };
  //

  // progress page로 이동하는 버튼 눌렀을 때, progress page로 navigate
  const onClickChangePage = () => {
    navigate(`/progress`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="real-background">
      <div className="center-box">
        <h2 className="header-text">Save Page</h2>
        <div style={{ height: 40, width: 100 }}></div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="userinfo"> User information file name : </label>
            <input
              type="text"
              name="userinfo"
              value={userInfoPath}
              onChange={handleUserInfoPath}
              className="input-box"
            />
          </div>
          <div style={{ height: 20, width: 100 }}></div>
          <div>
            <button
              type="button"
              onClick={onClickUserInfo}
              className="left-button"
            >
              Load user infos
            </button>
            <button
              type="button"
              onClick={onClickUserInfoDownload}
              className="right-button"
            >
              Download user infos
            </button>
          </div>
          <div style={{ height: 60, width: 100 }}></div>
          <div>
            <label htmlFor="groupinfo"> Group information file name : </label>
            <input
              type="text"
              name="groupinfo"
              value={groupInfoPath}
              onChange={handleGroupInfoPath}
              className="input-box"
            />
          </div>
          <div style={{ height: 20, width: 100 }}></div>
          <div>
            <button
              type="button"
              onClick={onClickGroupInfo}
              className="left-button"
            >
              Load group infos
            </button>
            <button
              type="button"
              onClick={onClickGroupInfoDownload}
              className="right-button"
            >
              Download group infos
            </button>
          </div>
          <div style={{ height: 60, width: 100 }}></div>
          <div>
            <label htmlFor="predictioninfo">
              Prediction information file name :
            </label>
            <input
              type="text"
              name="predictioninfo"
              value={predictionInfoPath}
              onChange={handlePredictionInfoPath}
              className="input-box"
            />
          </div>
          <div style={{ height: 20, width: 100 }}></div>
          <div>
            <button
              type="button"
              onClick={onClickPredictionInfo}
              className="left-button"
            >
              Load prediction infos
            </button>
            <button
              type="button"
              onClick={onClickPredictionInfoDownload}
              className="right-button"
            >
              Download prediction infos
            </button>
          </div>
          <div style={{ height: 60, width: 100 }}></div>
          <div>
            <label htmlFor="bitcoininfo">
              {" "}
              Bitcoin information file name :{" "}
            </label>
            <input
              type="text"
              name="bitcoininfo"
              value={bitcoinInfoPath}
              onChange={handleBitcoinInfoPath}
              className="input-box"
            />
          </div>
          <div style={{ height: 20, width: 100 }}></div>
          <div>
            <button
              type="button"
              onClick={onClickBitcoinInfo}
              className="left-button"
            >
              Load bitcoin infos
            </button>
            <button
              type="button"
              onClick={onClickBitcoinInfoDownload}
              className="right-button"
            >
              Download bitcoin infos
            </button>
          </div>
          <div style={{ height: 60, width: 100 }}></div>
          <button type="button" onClick={onClickChangePage} className="button">
            Go to Progress rate page
          </button>
        </form>
        <LoadAiPrediction />
      </div>
    </div>
  );
}

export default Download;

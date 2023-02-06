import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Progress from "../components/Progress";
import "../css/App.css";

// progress page
function ProgressPage({ setLoginStatus }) {
  // progress bar datas, 전체 페이지 height는 useState로 update
  const [infos, setInfos] = useState();
  const [heights, setHeights] = useState("1000px");

  const navigate = useNavigate();

  // download page로 이동하는 버튼 누르면 실행되는 함수
  const onClickChangePage = () => {
    navigate(`/download`);
  };

  // load infos 버튼 누르면 실행되는 함수
  const onClickLoadInfos = () => {
    const body = {};
    // db에서 진행 상황을 불러온 다음, progress bar로 계산하여 받아옴
    fetch("https://server-real.herokuapp.com/predictioninfo", {
      method: "post", // 통신방법
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((res) => {
        let finalList = [];
        for (let i = 0; i < res.length; i++) {
          let curElement = res[i];
          let userId = curElement["user_id"];
          let groupId = curElement["group_id"];
          let progress = 0;
          for (const [key, value] of Object.entries(curElement)) {
            if (
              key.indexOf("init_price") !== -1 ||
              key.indexOf("whether_to_change") !== -1 ||
              key.indexOf("final_price") !== -1
            ) {
              if (value != null) {
                progress += 1;
              }
            }
          }
          let curRes = [userId, groupId, progress, 30];
          finalList.push(curRes);
        }

        if (finalList) {
          let realFinalResult = [];
          let tempResult = [];
          let groupNum = parseInt(finalList.length / 4);

          for (let i = 0; i < finalList.length; i++) {
            tempResult.push(finalList[i]);

            if (i % 4 === 3) {
              let res = (
                <Progress setLoginStatus={setLoginStatus} infos={tempResult} />
              );
              realFinalResult.push(res);
              tempResult = [];
            }
          }
          if (tempResult.length) {
            let res = (
              <Progress setLoginStatus={setLoginStatus} infos={tempResult} />
            );
            realFinalResult.push(res);
            groupNum += 1;
          }
          setInfos(realFinalResult);
          setHeights(`${groupNum * 150 + 500}px`);
        }
      });
  };

  return (
    <div
      className="real-background-progress"
      style={{ height: heights, position: "absolute" }}
    >
      <div className="center-big-box">
        <h1 className="header-text">Survey Progress Status</h1>
        <button
          type="button"
          onClick={onClickLoadInfos}
          className="center-button"
        >
          Loading informations
        </button>
        <div className="blank-box"></div>
        <button type="button" onClick={onClickChangePage} className="button">
          Go to Download page
        </button>
        {infos}
      </div>
    </div>
  );
}

export default ProgressPage;

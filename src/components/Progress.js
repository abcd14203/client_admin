import React from "react";
import ProgressBar from "./ProgressBar";
import "../css/App.css";

// 참여자들의 progress 상태를 볼 수 있는 component
function Progress({ setLoginStatus, infos }) {
  let groupId = infos[0][1];
  let finalInfos = [];

  let classNames = ["first", "second", "third", "fourth"];

  finalInfos.push(<br></br>);
  finalInfos.push(<br></br>);
  finalInfos.push(<br></br>);
  finalInfos.push(<br></br>);
  finalInfos.push(<br></br>);

  // header는 group id
  finalInfos.push(<h3>Group Id : {groupId}</h3>);
  // 네 명의 그룹원들의 progress bar
  for (let i = 0; i < infos.length; i++) {
    let userId = infos[i][0];
    let num = infos[i][2];
    let maxNum = infos[i][3];
    finalInfos.push(
      <ProgressBar
        userId={userId}
        num={num}
        maxNum={maxNum}
        className={classNames[i]}
      />
    );
  }
  return finalInfos;
}

export default Progress;

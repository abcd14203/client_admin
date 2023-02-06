import styled from "styled-components";
import "../css/App.css";

// 개별 member의 progress bar design하는 component
function ProgressBar({ userId, num, maxNum, className }) {
  const dealt = Math.floor((num / maxNum) * 100);

  //소수점 버리기
  //styled-component에서 해당 비율만큼 박스크기를 차지하게 하면 된다!!

  const Rec = styled.div`
    width: 150px;
    height: 30px;
    background-color: gray;
  `;
  const Dealt = styled.div`
    background-color: red;
    width: ${dealt}%;
    height: 100%;
  `;

  return (
    <div className={className}>
      <p style={{ height: "10px" }}>User Id : {userId}</p>
      <p style={{ height: "10px" }}>progress status : {dealt}%</p>
      <Rec>
        <Dealt />
      </Rec>
    </div>
  );
}

export default ProgressBar;

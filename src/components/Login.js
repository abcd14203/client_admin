import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/App.css";

// login component
function Login({ setLoginStatus }) {
  // input인 id와 pw 는 useState로 update
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");

  const navigate = useNavigate();

  // input data 의 변화가 있을 때마다 value 값을 변경해서 useState 해준다
  const handleInputId = (e) => {
    setInputId(e.target.value);
  };

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };

  // login 버튼 클릭 이벤트
  const onClickLogin = () => {
    let body = {
      email: inputId,
      password: inputPw,
    };

    // id, pw가 admin db에 있는 경우에만 로그인
    fetch(
      "https://server-real.herokuapp.com/adminlogin",
      //"http://localhost:4000/adminlogin",
      {
        method: "post", // 통신방법
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(body),
      }
    )
      .then((response) => response.json())
      .then((res) => {
        if (res.message) {
          localStorage.setItem("ID", "");
          return alert("이메일 또는 비밀번호가 맞지 않습니다.");
        } else {
          localStorage.setItem("ID", res[0]["id"]);
          return res[0]["id"];
        }
      })
      .then((id) => {
        if (id) {
          navigate(`/download`);
        }
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="real-background">
      <div className="center-box">
        <h1 className="header-text">Admin Login</h1>
        <form onSubmit={handleSubmit}>
          <div style={{ left: "5%", position: "relative" }}>
            <label htmlFor="input_id">ID : </label>
            <input
              type="text"
              name="input_id"
              value={inputId}
              onChange={handleInputId}
              className="login-input-box"
            />
          </div>
          <div className="blank-box"></div>
          <div style={{ left: "3%", position: "relative" }}>
            <label htmlFor="input_pw">PassWord : </label>
            <input
              type="password"
              name="input_pw"
              value={inputPw}
              onChange={handleInputPw}
              className="login-input-box"
            />
          </div>
          <div className="blank-box"></div>
          <button type="button" onClick={onClickLogin} className="button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;

import Login from "../components/Login";

// login page
function HomePage({ setLoginStatus }) {
  return (
    <div>
      <Login setLoginStatus={setLoginStatus} />
    </div>
  );
}

export default HomePage;

import Download from "../components/Download";
import LoadAiPrediction from "../components/LoadAiPrediction"; // 미완성

// Download page
function DownloadPage({ setLoginStatus }) {
  return (
    <div>
      <Download setLoginStatus={setLoginStatus} />
    </div>
  );
}

export default DownloadPage;

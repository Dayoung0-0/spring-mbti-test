export default function LoadingScreen() {
  return (
    <div className="loading-container">
      <div className="spinner-image">
        <img src="/images/flower.png" alt="로딩 중" />
      </div>
      <div className="loading-text">결과로 넘어가는 중..</div>
      <div className="loading-bar">
        <div className="bar-inner"></div>
      </div>
    </div>
  );
}

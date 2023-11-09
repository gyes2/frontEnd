import "./CafeName.css";

const CafeName = () => {
  return (
    <div className="cafe-register-box">
      <div className="cafe-register-title">
        <p>카페명을 <br />입력해주세요</p>
        <hr />
      </div>
      {/* <div className="cafe-name-title-container"> */}
      <div className="cafe-name-title">
        <input type="text" value="카페명" className="cafe-name-inputbox"/>
      </div>
      {/* </div> */}
    </div>
  );
};

export default CafeName;
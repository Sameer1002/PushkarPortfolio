import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Associate</h4>
                <h5>WNS Global Services</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>VR Architect Visualizer</h4>
                <h5>Progressive software training hub</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Built emersive and engaging VR experience for multiple clients
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>3D Motion Graphics Executive</h4>
                <h5>Decimal Point Analytics PVT LTD</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Edited Product Demo Videos as per the script & Managed Project for Onboarding video editing for US Client which included working for multiple banks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

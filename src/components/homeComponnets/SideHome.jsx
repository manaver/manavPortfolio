import Logo from "../../img/mainPage/Logo.jpeg";
import ThemeBox from "./ThemeBox";

function SideHome() {
  return (
    <div>
      <ThemeBox />

      <div className="section" id="sideHome">
        {/* Main User Logo */}
        <div id="mainLogoBg">
          <img className="logo" src={Logo} alt="Logo" />
        </div>

        {/* User Details */}
        <div id="MainDetails miniSection d-flex flex-column">
          <div className="userName fs-1 fw-semibold">Manav</div>
          <div className="details fw-light fs-5 ">
            Full Stack Web Dve | BCA GRAD | FREELANCER | @WEB DEV | DEV OPS
          </div>
          <div className="downloadBtn miniSection">
            <a
              href="#"
              target="_resume"
              className="btn resumeBtn text-secondary border border-1 border-secondary rounded-2 fw-semibold"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideHome;

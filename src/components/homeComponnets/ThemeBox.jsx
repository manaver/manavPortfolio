import { useState } from "react";
import ThemeSettingIcon from "../../img/themeIcon.png";

function ThemeBox() {
  const [isVisible, setIsVisible] = useState(0);
  const [themeColor, setThemeColor] = useState("Light");

  const handleToggle = () => {
    setIsVisible(isVisible === 0 ? 1 : 0);
  };

  const handleThemeChange = (newColor) => {
    setThemeColor(newColor);
    var componentColor, bgColor, textColor, highlightedColor, secondaryBg;
    switch (newColor) {
      case "Light":
        bgColor = "rgba(255, 255, 255, 0.815)";
        componentColor = "rgb(243, 239, 239)";
        textColor = "rgb(117, 117, 117)";
        highlightedColor = "rgb(99, 3, 189)";
        break;
      case "Dark":
        bgColor = "rgba(23, 23, 23, 0.938)";
        componentColor = "#1E1E1E";
        textColor = "#F7F7F7";
        highlightedColor = "rgb(99, 3, 189)";
        break;
    }
    document.documentElement.style.setProperty(
      "--component-color",
      componentColor
    );
    document.documentElement.style.setProperty("--bg-color", bgColor);
    document.documentElement.style.setProperty("--text-color", textColor);
    document.documentElement.style.setProperty(
      "--highlighted-color",
      highlightedColor
    );
  };

  return (
    <div className="section container d-flex flex-row justify-content-center ">
      <div className="col-5 d-flex flex-column text-start ms-2">
        <label className="fs-3 fw-semibold">Theme</label>
        <label className="fs-6 fw-light">{themeColor}</label>
      </div>
      <div class="col-6">
        <div id="ThemeSelect">
          {/* Theme Btn */}
          <button
            class="btn dropdown-toggle"
            id="ThemeBtn"
            onClick={handleToggle}
          >
            <img className="largeIcon" src={ThemeSettingIcon} alt="Select" />
          </button>
          {/* Theme options */}
          <div
            className={`dropdown shadow ${isVisible ? "show" : "hidden"}`}
            id="ThemeBox"
          >
            <p
              onClick={(e) => handleThemeChange("Light")}
              class={`dropdown-item btn btn-light  ${
                themeColor == "Light" ? "active" : ""
              }`}
            >
              Light
            </p>
            <p
              onClick={(e) => handleThemeChange("Dark")}
              class={`dropdown-item btn btn-light  ${
                themeColor == "Dark" ? "active" : ""
              }`}
            >
              Dark
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ThemeBox;

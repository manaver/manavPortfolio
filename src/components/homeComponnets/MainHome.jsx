import TimeLine from "./timeline/Timeline";
import InfoBox from "./infoComponents/InfoBox";
import TechStack from "./techStackComponents/TechStack";
import GHrepos from "./github/GHrepos";

function MainHome() {
  return (
    <div className="w-100">
      <InfoBox />
      <TechStack />
      <TimeLine />
      <TimeLine />
      <GHrepos />
    </div>
  );
}

export default MainHome;

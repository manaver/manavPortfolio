import TimeLine from "./timeline/Timeline";
import InfoBox from "./infoComponents/InfoBox";
import TechStack from "./techStackComponents/TechStack";
import GHrepos from "./github/GHrepos";
import Location from "../../img/svg/location.svg";
import College from "../../img/svg/college.svg";
import GitHub from "../../img/svg/github.svg";
import Twitter from "../../img/svg/twitter.svg";
import Linkedin from "../../img/svg/linkedin.svg";
import Email from "../../img/svg/email.svg";

function MainHome() {
  const experience = [
    {
      time: "Jan 2023 - Present",
      heading: "Tour and Travel Project",
      info: "Company: Aslam Tour and Travel",
    },
    {
      time: "Nov 2022 - Jan 2023",
      heading: "School Registration System",
      info: "Freelance Project",
    },
    {
      time: "Sep 2022 - Oct 2021 && Sep 2022 - Oct 2022",
      heading: "LeetCode",
      info: "150 Problems Solved",
    },
  ];

  const education = [
    {
      time: "2020 - 2023",
      heading: "Bachelor's in Computer Application",
      info: "GGM Science College, Jammu",
    },
    {
      time: "2018 - 2020",
      heading: "High School",
      info: "Indra Public School, Jammu",
    },
  ];

  const techStacks = [
    "Laravel",
    "PHP",
    "HTML",
    "CSS",
    "JavaScript",
    "JQuery",
    "C",
    "C++",
    "Git",
    "GitHub",
    "Bootstrap",
    "Tailwind",
    "Docker",
  ];
  const info = [
    {
      svg: Location,
      header: "Based In",
      info: "India, Jammu",
    },
    {
      svg: College,
      header: "College",
      info: "GGM Science College",
    },
    {
      svg: GitHub,
      header: "Git Hub",
      info: "https://github.com/manaver",
      connect: 1,
    },
    {
      svg: Twitter,
      header: "Twitter",
      info: "https://twitter.com/Manav1924",
      connect: 1,
    },
    {
      svg: Linkedin,
      header: "Linkedin",
      info: "https://www.linkedin.com/in/manav-verma-590a92204/",
      connect: 1,
    },
    {
      svg: Email,
      header: "Email",
      info: "vermamanav117@gmail.com",
      ismail: 1,
    },
  ];

  return (
    <div className="w-100">
      <InfoBox data={info} />
      <TechStack data={techStacks} />
      <TimeLine data={experience} heading="Experience" />
      <TimeLine data={education} heading="Education" />
      <GHrepos />
    </div>
  );
}

export default MainHome;

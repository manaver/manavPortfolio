import InfoItem from "./InfoItem";

function InfoBox() {
  return (
    <div className="section shadow-sm">
      <div className="details d-flex flex-column">
        <InfoItem header="Based In" info="India, Jammu" />
        <InfoItem header="College" info="GGM Science College" />
        <InfoItem
          header="Git Hub"
          info="https://github.com/manaver"
          connect={1}
        />
        <InfoItem
          header="Twitter"
          info="https://twitter.com/Manav1924"
          connect={1}
        />
        <InfoItem
          header="Linkedin"
          info="https://www.linkedin.com/in/manav-verma-590a92204/"
          connect={1}
        />
        <InfoItem header="Email" info="vermamanav117@gmail.com" ismail={1} />
      </div>
    </div>
  );
}
export default InfoBox;

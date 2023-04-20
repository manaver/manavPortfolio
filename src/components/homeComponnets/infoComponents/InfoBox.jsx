import InfoItem from "./InfoItem";

function InfoBox() {
  return (
    <div className="section">
      <div className="details d-flex flex-column">
        <InfoItem />
        <InfoItem />
        <InfoItem />
      </div>
    </div>
  );
}
export default InfoBox;

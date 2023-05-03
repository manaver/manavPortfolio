import InfoItem from "./InfoItem";

function InfoBox(props) {
  return (
    <div className="section shadow-sm">
      <div className="details d-flex flex-column">
        {props.data.map((item, index) => (
          <InfoItem
            svg={item.svg}
            header={item.header}
            info={item.info}
            connect={item.connect}
            ismail={item.ismail}
          />
        ))}
      </div>
    </div>
  );
}
export default InfoBox;

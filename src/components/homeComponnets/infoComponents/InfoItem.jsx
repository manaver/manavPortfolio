function InfoItem(props) {
  const { isurl, ismail, connect } = props;

  let label = "";

  if (ismail) {
    label = (
      <div className="info">
        <a href={`mailto:${props.info}`}>{props.info}</a>
      </div>
    );
  } else if (isurl) {
    label = (
      <div className="info">
        <a href={props.info}>{props.info}</a>
      </div>
    );
  } else if (connect) {
    label = (
      <div className="info">
        <a href={props.info} target="_connect">
          ConnectManav
        </a>
      </div>
    );
  } else {
    label = <div className="info">{props.info}</div>;
  }

  return (
    <div className="inlineItem d-flex flex-row flex-wrap">
      <div className="head d-flex flex-row d-flex align-items-center">
        <div className="logo">
          <img className="miniIcon" src={props.svg} alt="Stars" />
        </div>
        <h4 className="fw-bold fs-6 ms-3 head-label">{props.header}</h4>
      </div>
      {label}
    </div>
  );
}
InfoItem.defaultProps = {
  isurl: 0,
  ismail: 0,
  connect: 0,
};
export default InfoItem;

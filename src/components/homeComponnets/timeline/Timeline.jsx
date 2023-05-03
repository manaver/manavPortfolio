import TimeLineItem from "./TimeLineItem";

function TimeLine(props) {
  return (
    <div className="section">
      <div className="heading fs-3 fw-semibold mb-4">{props.heading}</div>

      <div className="items d-flex flex-column  p-3">
        {props.data.map((item, index) => (
          <TimeLineItem
            time={item.title}
            heading={item.heading}
            info={item.info}
          />
        ))}
      </div>
    </div>
  );
}
export default TimeLine;

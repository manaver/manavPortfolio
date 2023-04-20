import TimeLineItem from "./TimeLineItem";

function TimeLine() {
  return (
    <div className="section">
      <div className="heading fs-3 fw-semibold mb-4">TimeLine</div>

      <div className="items d-flex flex-column  p-3">
        <TimeLineItem />
        <TimeLineItem />
        <TimeLineItem />
        <TimeLineItem />
      </div>
    </div>
  );
}
export default TimeLine;

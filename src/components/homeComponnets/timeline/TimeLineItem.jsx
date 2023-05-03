function TimeLineItem(props) {
  return (
    <div className="text-start">
      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-content w-100">
            <p className="timeline w-100 desc">{props.time}</p>
            <h3 className="">{props.heading}</h3>
            <p className=" w-100 desc">{props.info}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TimeLineItem;

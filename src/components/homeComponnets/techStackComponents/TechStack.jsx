import TechStackItems from "./TechStackItems";

function TechStack(props) {
  return (
    <div className="section">
      <div className="heading fw-semibold fs-3">Tech Stacks</div>
      <div className="items d-flex flex-row flex-wrap justify-content-center p-3">
        {props.data.map((item, index) => (
          <TechStackItems name={item} />
        ))}
      </div>
    </div>
  );
}
export default TechStack;

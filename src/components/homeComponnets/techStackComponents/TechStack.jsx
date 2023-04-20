import TechStackItems from "./TechStackItems";

function TechStack() {
  return (
    <div className="section">
      <div className="heading fw-semibold fs-3">Tech Stacks</div>
      <div className="items d-flex flex-row flex-wrap justify-content-center p-3">
        <TechStackItems />
        <TechStackItems />
        <TechStackItems />
        <TechStackItems />
        <TechStackItems />
        <TechStackItems />
        <TechStackItems />
        <TechStackItems />
      </div>
    </div>
  );
}
export default TechStack;

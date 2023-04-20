import SideHome from "./homeComponnets/SideHome";
import MainHome from "./homeComponnets/MainHome";

function Home() {
  return (
    <div className="row" id="Home">
      <div
        id="sideHome"
        className=" col-10 col-sm-6 col-md-5 col-lg-4 mx-auto d-flex align-items-start"
      >
        <SideHome />
      </div>

      <div className="col-10 col-sm-6 col-md-7 col-lg-8 mx-auto d-flex align-items-center">
        <MainHome />
      </div>
    </div>
  );
}

export default Home;

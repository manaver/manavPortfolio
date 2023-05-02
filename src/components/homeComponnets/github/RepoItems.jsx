import Star from "../../../img/star.svg";
import Fork from "../../../img/fork.svg";

function RepoItems(props) {
  return (
    <ul className="p-0">
      {props.repositories.map((repo) => (
        <div id="repos" className="section shadow">
          <li key={repo.id}>
            <a className="fs-4 fw-semibold" href={repo.html_url}>
              {repo.name}
            </a>
            <p className="my-3">{repo.description}</p>
            <div className="d-flex flex-row justify-content-between">
              <p className="LabelIcon">
                <img className="miniIcon" src={Star} alt="Stars" />
                <label> {repo.stargazers_count}</label>
              </p>
              <p className="LabelIcon">
                <img className="miniIcon" src={Fork} alt="Stars" />
                <label> {repo.forks_count}</label>
              </p>
            </div>
          </li>
        </div>
      ))}
    </ul>
  );
}
export default RepoItems;

import { useEffect, useState } from "react";
import RepoItems from "./RepoItems";

function GHrepos() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/manaver/repos")
      .then((response) => response.json())
      .then((data) => {
        // Sort the repositories by number of stars
        const sortedData = data.sort(
          (a, b) => b.stargazers_count - a.stargazers_count
        );
        // Only show the top 5 repositories
        const topRepositories = sortedData.slice(0, 5);
        // Update the state variable
        setRepositories(topRepositories);
      });
  }, []);

  return (
    <div className="p-3 pt-2 mb-5 " id="Projects">
      <div className="fs-3 fw-semibold m-4">My Projects</div>
      <RepoItems repositories={repositories} />
    </div>
  );
}
export default GHrepos;

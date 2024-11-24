// app/page.js


import NavBar from '../components/NavBar.js';
import { fetchRepos } from '../lib/github';


export default async function HomePage() {
  const username = 'landonWcummings'; // Replace with your GitHub username
  const repos = await fetchRepos(username);


  return (
    <div>
      <NavBar repos={repos} />
      <h1>Welcome to My GitHub Repositories</h1>
      <p>Select a repository from the navigation bar to view its details.</p>
    </div>
  );
}

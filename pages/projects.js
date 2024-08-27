export default function Projects() {
    return (
      <div className="min-h-screen bg-gray-900 text-white p-8">
        <h1 className="text-3xl font-bold mb-6">My Projects</h1>
        <ul>
          <li className="mb-8">
            <h2 className="text-2xl font-bold">Project 1: AGRI-MONITORING</h2>
            <p>Description: A project focused on monitoring and managing agricultural activities using advanced technologies.</p>
            <a href="https://github.com/SudharshanMyilsamy/AGRI-MONITORING" className="text-blue-400">View on GitHub</a>
          </li>
          <li className="mb-8">
            <h2 className="text-2xl font-bold">Project 2: Budget Allocation App</h2>
            <p>Description: A web application designed to help users allocate and manage their budgets effectively.</p>
            <a href="https://github.com/SudharshanMyilsamy/Budget-Allocation-App" className="text-blue-400">View on GitHub</a>
          </li>
        </ul>
      </div>
    );
  }
  
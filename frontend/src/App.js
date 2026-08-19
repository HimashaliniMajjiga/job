import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import JobList from "./pages/JobList";
import JobDetails from "./pages/JobDetails";
import Admin from "./pages/Admin";

import JobAnalytics from "./components/JobAnalytics";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<JobList />}
        />

        <Route
          path="/jobs/:id"
          element={<JobDetails />}
        />

        <Route
          path="/admin"
          element={<Admin />}
        />

        <Route
          path="/analytics"
          element={<JobAnalytics />}
        />
      </Routes>
    </Router>
  );
}

export default App;
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import JobList from "./pages/JobList";
import JobDetails from "./pages/JobDetails";
import Admin from "./pages/Admin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<JobList />} />
        <Route path="/jobs/:id" element={<JobDetails />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;

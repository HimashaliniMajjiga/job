import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BulkUpload from "./components/BulkUpload";
import SystemHealth from "./components/SystemHealth";
import AdminReports from "./components/AdminReports";
import JobList from "./pages/JobList";
import JobDetails from "./pages/JobDetails";
import Admin from "./pages/Admin";
import AuditLogs from "./components/AuditLogs";
import UserManagement from "./components/UserManagement";
import DeploymentSettings from "./components/DeploymentSettings";
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
  path="/audit"
  element={<AuditLogs />}
/>

<Route
  path="/users"
  element={<UserManagement />}
/>

<Route
  path="/deployment-settings"
  element={<DeploymentSettings />}
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
  path="/bulk-upload"
  element={<BulkUpload />}
/>

<Route
  path="/system-health"
  element={<SystemHealth />}
/>

<Route
  path="/admin-reports"
  element={<AdminReports />}
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
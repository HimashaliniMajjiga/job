import React from "react";

function JobAnalytics() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Job Analytics Dashboard</h1>

      <div
        style={{
          border: "1px solid #ddd",
          padding: "20px",
          borderRadius: "10px",
          marginTop: "20px",
        }}
      >
        <h3>Statistics</h3>

        <p>Total Jobs: 150</p>
        <p>Total Applications: 980</p>
        <p>Active Recruiters: 34</p>
        <p>Monthly Growth: 22%</p>
      </div>
    </div>
  );
}

export default JobAnalytics;
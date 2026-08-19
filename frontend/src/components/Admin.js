import React, { useState } from "react";
import { API_BASE } from "../config/api";

function Admin() {
  const [job, setJob] = useState({
    title: "",
    company: "",
    location: "",
    description: "",
    apply_link: "",
    salary: "",
    jobType: "Full Time",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setJob({
      ...job,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await fetch(`${API_BASE}/jobs`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "my-secret-token",
        },
        body: JSON.stringify(job),
      });

      if (!response.ok) {
        throw new Error("Failed to add job");
      }

      alert("Job added successfully");

      setJob({
        title: "",
        company: "",
        location: "",
        description: "",
        apply_link: "",
        salary: "",
        jobType: "Full Time",
      });
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Add New Job</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Job Title"
          value={job.title}
          onChange={handleChange}
        />
        <br />

        <input
          name="company"
          placeholder="Company"
          value={job.company}
          onChange={handleChange}
        />
        <br />

        <input
          name="location"
          placeholder="Location"
          value={job.location}
          onChange={handleChange}
        />
        <br />

        <input
          name="salary"
          placeholder="Salary"
          value={job.salary}
          onChange={handleChange}
        />
        <br />

        <select
          name="jobType"
          value={job.jobType}
          onChange={handleChange}
        >
          <option>Full Time</option>
          <option>Part Time</option>
          <option>Contract</option>
          <option>Internship</option>
        </select>

        <br />

        <textarea
          name="description"
          placeholder="Description"
          value={job.description}
          onChange={handleChange}
        />

        <br />

        <input
          name="apply_link"
          placeholder="Apply Link"
          value={job.apply_link}
          onChange={handleChange}
        />

        <br />

        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Add Job"}
        </button>
      </form>
    </div>
  );
}

export default Admin;
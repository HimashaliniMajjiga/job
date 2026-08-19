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
  const [deleteId, setDeleteId] = useState("");

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

      alert("Job added successfully!");

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

  const handleDelete = async () => {
    if (!deleteId) {
      alert("Enter Job ID");
      return;
    }

    try {
      const response = await fetch(
        `${API_BASE}/jobs/${deleteId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: "my-secret-token",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete job");
      }

      alert("Job deleted successfully!");
      setDeleteId("");
    } catch (err) {
      alert(err.message);
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
        <br />

        <input
          name="company"
          placeholder="Company"
          value={job.company}
          onChange={handleChange}
        />
        <br />
        <br />

        <input
          name="location"
          placeholder="Location"
          value={job.location}
          onChange={handleChange}
        />
        <br />
        <br />

        <input
          name="salary"
          placeholder="Salary"
          value={job.salary}
          onChange={handleChange}
        />
        <br />
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
        <br />

        <textarea
          name="description"
          placeholder="Description"
          value={job.description}
          onChange={handleChange}
        />

        <br />
        <br />

        <input
          name="apply_link"
          placeholder="Apply Link"
          value={job.apply_link}
          onChange={handleChange}
        />

        <br />
        <br />

        <button
          type="submit"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Add Job"}
        </button>
      </form>

      <hr style={{ margin: "30px 0" }} />

      <h2>Delete Job</h2>

      <input
        type="text"
        placeholder="Enter Job ID"
        value={deleteId}
        onChange={(e) => setDeleteId(e.target.value)}
      />

      <button
        onClick={handleDelete}
        style={{
          marginLeft: "10px",
          backgroundColor: "red",
          color: "white",
          border: "none",
          padding: "8px 12px",
          cursor: "pointer",
        }}
      >
        Delete Job
      </button>
    </div>
  );
}

export default Admin;
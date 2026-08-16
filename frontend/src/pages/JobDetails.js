import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function JobDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`http://localhost:5000/jobs/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch job details");
        }
        return res.json();
      })
      .then((data) => {
        setJob(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching job:", err);
        setError("Unable to load job details");
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <h2>Loading Job Details...</h2>;
  }

  if (error) {
    return <h2 style={{ color: "red" }}>{error}</h2>;
  }

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "30px auto",
        padding: "20px",
      }}
    >
      <button
        onClick={() => navigate(-1)}
        style={{
          marginBottom: "20px",
          padding: "10px 15px",
          backgroundColor: "#6c757d",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        ← Back
      </button>

      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: "10px",
          padding: "25px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          backgroundColor: "#fff",
        }}
      >
        <h2 style={{ color: "#007bff" }}>{job.title}</h2>

        <hr />

        <p>
          <strong>Job ID:</strong> {job.id}
        </p>

        <p>
          <strong>Company:</strong> {job.company}
        </p>

        <p>
          <strong>Location:</strong> {job.location}
        </p>

        <p>
          <strong>Job Type:</strong> {job.jobType || "Full Time"}
        </p>

        <p>
          <strong>Salary:</strong> {job.salary || "Not Disclosed"}
        </p>

        <p>
          <strong>Description:</strong>
        </p>

        <p>{job.description}</p>

        <div style={{ marginTop: "20px" }}>
          {job.apply_link} target="_blank"
            rel="noopener noreferrer"
          >
            <button
              style={{
                backgroundColor: "#007bff",
                color: "white",
                padding: "12px 20px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Apply Now
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default JobDetails;
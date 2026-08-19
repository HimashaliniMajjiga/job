import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { API_BASE } from "../config/api";

function JobDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [job, setJob] = useState(null);
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    Promise.all([
      fetch(`${API_BASE}/jobs/${id}`),
      fetch(`${API_BASE}/jobs/${id}/recommendations`)
    ])
      .then(async ([jobRes, recRes]) => {
        if (!jobRes.ok) {
          throw new Error("Failed to fetch job details");
        }

        const jobData = await jobRes.json();

        let recommendationData = [];

        if (recRes.ok) {
          recommendationData = await recRes.json();
        }

        setJob(jobData);
        setRecommendations(recommendationData);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
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

  if (!job) {
    return <h2>No Job Found</h2>;
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
        <h2 style={{ color: "#007bff" }}>
          {job.title}
        </h2>

        <hr />

        <p>
          <strong>Job ID:</strong> {job.id}
        </p>

        <p>
          <strong>Company:</strong> {job.company}
        </p>

        <p>
          <strong>Location:</strong>{" "}
          {job.location || "Not Specified"}
        </p>

        <p>
          <strong>Job Type:</strong>{" "}
          {job.jobType || "Full Time"}
        </p>

        <p>
          <strong>Salary:</strong>{" "}
          {job.salary || "Not Disclosed"}
        </p>

        <p>
          <strong>Description:</strong>
        </p>

        <p>{job.description}</p>

        {job.apply_link && (
          <div style={{ marginTop: "20px" }}>
            {job.apply_link}
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
        )}

        {recommendations?.length > 0 && (
          <div style={{ marginTop: "25px" }}>
            <h3>Recommended Jobs</h3>

            <ul>
              {recommendations.map((item, index) => (
                <li key={index}>
                  {item.title || JSON.stringify(item)}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default JobDetails;
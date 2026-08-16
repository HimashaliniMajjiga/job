import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function JobDetails() {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/jobs/${id}`)
      .then((res) => res.json())
      .then((data) => setJob(data))
      .catch((err) => console.error("Error fetching job:", err));
  }, [id]);

  if (!job) return <h2>Loading...</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>{job.title}</h2>
      <p><strong>Company:</strong> {job.company}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Description:</strong> {job.description}</p>
      <a href={job.apply_link} target="_blank" rel="noopener noreferrer">
        <button style={{ backgroundColor: "#007bff", color: "white", padding: "10px", border: "none", borderRadius: "5px" }}>
          Apply Now
        </button>
      </a>
    </div>
  );
}

export default JobDetails;

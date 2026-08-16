import React from "react";
import { Link } from "react-router-dom";

function JobCard({ job }) {
  return (
    <div style={styles.card}>
      <h3>
        <Link to={`/jobs/${job.id}`} style={styles.link}>
          {job.title}
        </Link>
      </h3>
      <p><strong>Company:</strong> {job.company}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <a href={job.apply_link} target="_blank" rel="noopener noreferrer">
        <button style={styles.button}>Apply</button>
      </a>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "15px",
    marginBottom: "10px"
  },
  button: {
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    padding: "8px 12px",
    borderRadius: "4px",
    cursor: "pointer"
  },
  link: { textDecoration: "none", color: "#333" }
};

export default JobCard;

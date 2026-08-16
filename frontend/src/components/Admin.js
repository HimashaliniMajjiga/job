import React, { useState } from "react";

function Admin() {
  const [job, setJob] = useState({
    title: "",
    company: "",
    location: "",
    description: "",
    apply_link: ""
  });

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:5000/jobs", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        "Authorization": "my-secret-token" // ✅ add auth if backend requires
      },
      body: JSON.stringify(job)
    });
    alert("Job added successfully!");
    setJob({ title: "", company: "", location: "", description: "", apply_link: "" });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Add New Job</h2>
      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Job Title" value={job.title} onChange={handleChange} /><br />
        <input name="company" placeholder="Company" value={job.company} onChange={handleChange} /><br />
        <input name="location" placeholder="Location" value={job.location} onChange={handleChange} /><br />
        <textarea name="description" placeholder="Description" value={job.description} onChange={handleChange} /><br />
        <input name="apply_link" placeholder="Apply Link" value={job.apply_link} onChange={handleChange} /><br />
        <button type="submit">Add Job</button>
      </form>
    </div>
  );
}

export default Admin;

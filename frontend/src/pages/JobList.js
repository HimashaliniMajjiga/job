import React, { useState, useEffect } from "react";
import JobCard from "../components/JobCard";
import SearchBar from "../components/SearchBar";

function JobList() {
  const [jobs, setJobs] = useState([]);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const jobsPerPage = 2;

  useEffect(() => {
    fetch("http://localhost:5000/jobs")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch jobs");
        }
        return res.json();
      })
      .then((data) => {
        setJobs(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching jobs:", err);
        setError("Unable to load jobs");
        setLoading(false);
      });
  }, []);

  // Reset to first page when search changes
  useEffect(() => {
    setPage(1);
  }, [searchTerm]);

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  const startIndex = (page - 1) * jobsPerPage;
  const paginatedJobs = filteredJobs.slice(
    startIndex,
    startIndex + jobsPerPage
  );

  if (loading) {
    return <h2>Loading jobs...</h2>;
  }

  if (error) {
    return <h2 style={{ color: "red" }}>{error}</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Job Listings</h1>

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <br />

      {filteredJobs.length === 0 ? (
        <h3>No jobs found.</h3>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {paginatedJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>

          <div
            style={{
              marginTop: "20px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <button
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
              style={{
                padding: "8px 12px",
                cursor: page === 1 ? "not-allowed" : "pointer",
              }}
            >
              Previous
            </button>

            <span>
              Page {page} of {totalPages}
            </span>

            <button
              disabled={page === totalPages}
              onClick={() => setPage(page + 1)}
              style={{
                padding: "8px 12px",
                cursor:
                  page === totalPages ? "not-allowed" : "pointer",
              }}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default JobList;
import React from "react";

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <input
      type="text"
      placeholder="Search jobs by title or company..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      style={styles.input}
    />
  );
}

const styles = {
  input: {
    width: "90%",
    padding: "10px",
    marginBottom: "20px",
    borderRadius: "5px",
    border: "1px solid #ccc"
  }
};

export default SearchBar;

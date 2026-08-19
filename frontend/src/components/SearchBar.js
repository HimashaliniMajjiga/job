import React from "react";

function SearchBar({
  searchTerm,
  setSearchTerm,
  selectedLocation,
  setSelectedLocation,
}) {
  return (
    <>
      <input
        type="text"
        placeholder="Search by title, company, skills..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={styles.input}
      />

      <select
        value={selectedLocation}
        onChange={(e) => setSelectedLocation(e.target.value)}
        style={styles.input}
      >
        <option value="">All Locations</option>
        <option>Bangalore</option>
        <option>Pune</option>
        <option>Hyderabad</option>
        <option>Chennai</option>
      </select>
    </>
  );
}

const styles = {
  input: {
    width: "90%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
};

export default SearchBar;
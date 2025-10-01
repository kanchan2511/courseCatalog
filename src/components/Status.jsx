import React from "react";

const Status = ({ loading, error }) => {
  if (loading) return <p className="status">Loading courses...</p>;
  if (error) return <p className="status">Error: {error}</p>;
  return null;
};

export default Status;
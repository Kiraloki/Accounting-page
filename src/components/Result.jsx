import React from "react";
import data from "./data";

function Result({ query }) {
  const result = data.filter((d) => {
    return d.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <>
      (
      <div
        style={{
          position: "absolute",
          top: "0",
          right: "0",
          width: "40%",
          backgroundColor: "#e3f1fc",

          alignItems: "center",
          justifyContent: "center",
          overflow: "scroll",
          height: "700px",
        }}
      >
        <p style={{ backgroundColor: "#2b67ab", color: "white" }}>
          {" "}
          List of Stock items for seach of "{query}"
        </p>
        <p>Item Name</p>
        <div style={{ color: "#759cc7" }}>
          <p>{result.length}</p>
          {result.map((data) => {
            return <p>{data}</p>;
          })}
        </div>
      </div>
      )
    </>
  );
}

export default Result;

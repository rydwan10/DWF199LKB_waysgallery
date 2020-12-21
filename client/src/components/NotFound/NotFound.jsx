import React from "react";

function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <span
        style={{
          fontFamily: "Nunito",
          fontWeight: "700",
          fontSize: "4rem",
          color: "#2FC4B2",
        }}
      >
        404
      </span>
      <span
        style={{
          fontFamily: "Nunito",
          fontWeight: "700",
          fontSize: "1.6rem",
        }}
      >
        Not Found
      </span>
    </div>
  );
}

export default NotFound;

import React from "react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <small>© {new Date().getFullYear()} TicketX</small>
        <small>Privacy · Term · Support</small>
      </div>
    </footer>
  );
}

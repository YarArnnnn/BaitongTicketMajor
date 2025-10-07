import React from "react";

export default function Header() {
  return (
    <header className="site-header">
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
        }}
      >
        <a href="/" className="brand" aria-label="Go to home">
          <img src="/project/public/123 (1).png" className="logo" />
        </a>
        <div style={{ fontWeight: 700 }}>Ticket</div>
        <nav style={{ display: "flex", gap: 16, opacity: 0.9 }}>
          <a href="#">Home</a>
          <a href="#">Catagorie</a>
          <a href="#">Cart</a>
          <a href="#">Login</a>
        </nav>
      </div>
    </header>
  );
}

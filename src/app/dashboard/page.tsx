"use client";
import { useState } from "react";

export default function DashboardPage() {
  const [name, setName] = useState("");
  console.log("Dashboard client component");

  return (
    <div>
      <h1>Dashboard page</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>hello, {name}</p>
    </div>
  );
}

"use client";

import { useState } from "react";
import ClientComponentTwo from "./client-comonent-two";
import ServerComponentOne from "./server-component-one";

export default function ClientComponentOne({
  children,
}: {
  children: React.ReactNode;
}) {
  const [name, setName] = useState("Batman");
  return (
    <>
      <h1>Client Component One</h1>
      {/* <ServerComponentOne /> */}
      {children}
    </>
  );
}

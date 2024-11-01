import fs from "fs";
import ServerComponentTwo from "./server-component-two";
import ClientComponentOne from "./client-comonent-one";

export default function ServerComponentOne() {
  fs.readFileSync("src/components/server-component-one.tsx", "utf-8");

  return (
    <>
      <h1>Server Component One</h1>
      {/* <ClientComponentOne /> */}
    </>
  );
}

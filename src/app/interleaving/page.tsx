import ClientComponentOne from "@/components/client-comonent-one";
import ServerComponentOne from "@/components/server-component-one";

export default function InterleavingPage() {
  return (
    <>
      <h1>InterleavingPage</h1>
      {/* <ServerComponentOne /> */}
      <ClientComponentOne>
        <ServerComponentOne />
      </ClientComponentOne>
    </>
  );
}

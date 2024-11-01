import ImageSlider from "@/components/slider";
// import { clientSideFunction } from "@/utils/client-utils";
import { serverSideFunction } from "@/utils/server-utils";

export default function ServerRoutePage() {
  console.log("server route rendered");
  // const clientResult = clientSideFunction();

  const result = serverSideFunction();
  return (
    <>
      <h1>ServerRoutePage</h1>
      <p>{result}</p>
      {/* <p>{clientResult}</p> */}
      <ImageSlider />
    </>
  );
}

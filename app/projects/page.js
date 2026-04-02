import { Suspense } from "react";
import ProjectClient from "./ProjectClient";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading project...</div>}>
      <ProjectClient />
    </Suspense>
  );
}

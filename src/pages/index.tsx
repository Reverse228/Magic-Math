import { Canvas, SideBar } from "@components";

export default function Page() {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <SideBar />
      <Canvas />
    </div>
  );
}

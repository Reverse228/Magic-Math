import { useState } from "react";

import { Button, SideBar } from "@components";

export default function Page() {
  const [state, setState] = useState(true);

  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <SideBar expand={state} />
      <Button
        label="SideBar"
        onClick={() => setState(!state)}
        style={{
          position: "relative",
          left: "0px",
          top: "150px",
        }}
      />
    </div>
  );
}

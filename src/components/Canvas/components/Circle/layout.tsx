import { type FC } from "react";

import { Apex, SimplePoint, StartPoint } from "@components";

import type { ThreeElements } from "@react-three/fiber";
import type { Props } from "./types";

export const Circle: FC<ThreeElements["mesh"] & Props> = (props) => {
  const { type, id, position } = props;

  if (type === "apex") {
    return <Apex position={position} id={id} />;
  } else if (type === "startPoint") {
    return <StartPoint position={position} />;
  } else if (type === "simplePoint") {
    return <SimplePoint position={position} />;
  }
};

import { type FC } from "react";

import { Apex } from "@components";

import type { ThreeElements } from "@react-three/fiber";
import type { Props } from "./types";

export const Circle: FC<ThreeElements["mesh"] & Props> = (props) => {
  const { type, position, id } = props;

  if (type === "apex") {
    return <Apex position={position} id={id} />;
  } else if (type === "startPoint") {
    <></>;
  }
  return <></>;
};

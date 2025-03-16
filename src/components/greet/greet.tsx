import React from "react";
import { GreetProps } from "./greet.types";

export const Greet: React.FC<GreetProps> = ({ personName }) => {
  return <div>{`hello ${personName}`}</div>;
};

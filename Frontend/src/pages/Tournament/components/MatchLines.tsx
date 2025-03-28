// components/MatchLines.tsx
import React from "react";
import { LINE_POSITION, VerticalLine, HorizontalLine } from "../Matching";

const MatchLines: React.FC = () => (
  <>
    <VerticalLine left={LINE_POSITION.LEFT_VERTICAL} />
    <HorizontalLine left={LINE_POSITION.LEFT_HORIZONTAL} />
    <VerticalLine left={LINE_POSITION.RIGHT_VERTICAL} />
    <HorizontalLine left={LINE_POSITION.RIGHT_HORIZONTAL} />
  </>
);

export default MatchLines;

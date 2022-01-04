import React from "react";
import { RoughNotation } from "react-rough-notation";

export const CircleHighlight = ({ color, children }) => {
  // Change the animation duration depending on length of text we're animating (speed = distance / time)
  const animationDuration = Math.floor(300 * children.length);
  const animationDelay = 5000;
  return (
    <RoughNotation
      type="circle"
      multiline={false}
      padding={[4, 4]}
      iterations={1}
      animationDuration={animationDuration}
      animationDelay={animationDelay}
      color={color}
    >
      {children}
    </RoughNotation>
  );
};

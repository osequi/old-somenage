import React from "react";

/**
 * Imports other components, hooks, helpers.
 */
import CubeFace from ".";

/**
 * Displays a face of a shape.
 */
const CubeFaceDemo = (props) => {
  return (
    <>
      <CubeFace name="front">CubeFace</CubeFace>
      <CubeFace name="back">CubeFace</CubeFace>
      <CubeFace name="left">CubeFace</CubeFace>
      <CubeFace name="right">CubeFace</CubeFace>
      <CubeFace name="top">CubeFace</CubeFace>
      <CubeFace name="bottom">CubeFace</CubeFace>
    </>
  );
};

export default CubeFaceDemo;

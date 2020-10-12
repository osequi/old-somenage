import React from "react";
import CubeFace from "./CubeFace";

export default {
  component: CubeFace,
  title: "CubeFace"
};

const Template = args => <CubeFace {...args} />;

export const Default = Template.bind({});
Default.args = {};

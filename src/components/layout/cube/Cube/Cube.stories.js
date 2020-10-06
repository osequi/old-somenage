import React from "react";
import Cube from "./Cube";

export default {
  component: Cube,
  title: "Cube",
};

const Template = (args) => <Cube {...args} />;

export const Default = Template.bind({});

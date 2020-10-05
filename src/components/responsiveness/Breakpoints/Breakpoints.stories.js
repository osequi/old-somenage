import React from "react";
import Breakpoints from "./Breakpoints";

export default {
  component: Breakpoints,
  title: "Breakpoints"
};

const Template = args => <Breakpoints {...args} />;

export const Default = Template.bind({});
Default.args = {};

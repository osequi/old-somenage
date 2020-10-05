import React from "react";
import Breakpoint from "./Breakpoint";

export default {
  component: Breakpoint,
  title: "Breakpoint"
};

const Template = args => <Breakpoint {...args} />;

export const Default = Template.bind({});
Default.args = {};

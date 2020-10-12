import React from "react";
import Face from "./Face";

export default {
  component: Face,
  title: "Face"
};

const Template = args => <Face {...args} />;

export const Default = Template.bind({});
Default.args = {};

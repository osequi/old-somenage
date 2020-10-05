import React from "react";
import Display from "./Display";

export default {
  component: Display,
  title: "Display"
};

const Template = args => <Display {...args} />;

export const Default = Template.bind({});
Default.args = {};

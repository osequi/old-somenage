import React from "react";
import Headings from "./Headings";

export default {
  component: Headings,
  title: "Headings",
};

const Template = (args) => <Headings {...args} />;

export const Default = Template.bind({});
Default.args = {};

import React from "react";
import ThemeDemo from "./ThemeDemo";

export default {
  component: ThemeDemo,
  title: "ThemeDemo"
};

const Template = args => <ThemeDemo {...args} />;

export const Default = Template.bind({});
Default.args = {};

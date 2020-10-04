import React from "react";
import Theme from "./Theme";

export default {
  component: Theme,
  title: "Theme"
};

const Template = args => <Theme {...args} />;

export const Default = Template.bind({});
Default.args = {};

import React from "react";
import Font from "./Font";

export default {
  component: Font,
  title: "Font"
};

const Template = args => <Font {...args} />;

export const Default = Template.bind({});
Default.args = {};

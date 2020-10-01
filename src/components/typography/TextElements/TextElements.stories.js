import React from "react";
import TextElements from "./TextElements";

export default {
  component: TextElements,
  title: "TextElements"
};

const Template = args => <TextElements {...args} />;

export const Default = Template.bind({});
Default.args = {};

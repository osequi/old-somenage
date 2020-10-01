import React from "react";
import Fonts from "./Fonts";

export default {
  component: Fonts,
  title: "Fonts"
};

const Template = args => <Fonts {...args} />;

export const Default = Template.bind({});
Default.args = {};

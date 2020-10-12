import React from "react";
import Faces from "./Faces";

export default {
  component: Faces,
  title: "Faces"
};

const Template = args => <Faces {...args} />;

export const Default = Template.bind({});
Default.args = {};

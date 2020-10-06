import React from "react";
import Layout from "./Layout";

export default {
  component: Layout,
  title: "Layout"
};

const Template = args => <Layout {...args} />;

export const Default = Template.bind({});
Default.args = {};

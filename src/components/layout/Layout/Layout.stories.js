import React from "react";
import Layout from "./Layout";

export default {
  component: Layout,
  title: "Layout",
};

const Template = (args) => <Layout {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <p>The default layout</p>,
};

export const WithoutColumns = Template.bind({});
WithoutColumns.args = {
  children: (
    <>
      <p>The first item</p>
      <p>The second item</p>
    </>
  ),
};

export const WithColumns = Template.bind({});
WithColumns.args = {
  ...WithoutColumns.args,
  columns: 2,
};

export const WithEmptyColumnAtEnd = Template.bind({});
WithEmptyColumnAtEnd.args = {
  ...WithoutColumns.args,
  columns: 3,
};

export const WithGap = Template.bind({});
WithGap.args = {
  ...WithColumns.args,
  gap: 1,
};

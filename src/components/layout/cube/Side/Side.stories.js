import React from "react";
import Side from "./Side";

export default {
  component: Side,
  title: "Side",
};

const Template = (args) => <Side {...args} />;

export const Default = Template.bind({});

export const Front = Template.bind({});
Front.args = {
  width: "100px",
  height: "100px",
};

export const Back = Template.bind({});
Back.args = {
  ...Front.args,
  name: "back",
};

export const Left = Template.bind({});
Left.args = {
  ...Front.args,
  name: "left",
};

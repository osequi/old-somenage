import React from "react";

/**
 * Imports other components and hooks
 */
import Layout from ".";

/**
 * Displays the Layout demo
 */
const LayoutDemo = (props) => {
  const items = Array(10)
    .fill("")
    .map((item, index) => {
      return <div key={index}>Item {index + 1}</div>;
    });

  return (
    <>
      <Layout columns={3} gap={0} fauxLines="both">
        {items}
      </Layout>
    </>
  );
};

export default LayoutDemo;

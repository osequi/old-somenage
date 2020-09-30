import React, { useState, useEffect } from "react";
import marked from "marked";

const useMarkdown = (file) => {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch(file)
      .then((response) => {
        return response.text();
      })
      .then((text) => {
        setMarkdown(marked(text));
      });
  }, [file]);

  const html = <div dangerouslySetInnerHTML={{ __html: markdown }} />;

  return { markdown: markdown, html: html };
};

export default useMarkdown;

import React from "react";

/**
 * Imports other components and hooks
 */
import MediaQueries from ".";

/**
 * Displays the component.
 */
const MediaQueriesDemo = (props) => {
  const portrait = "(orientation: portrait)";
  const landscape = "(orientation: landscape)";
  const tablet = "(min-width: 768px)";

  return (
    <>
      <p>
        <MediaQueries values={[portrait]}>
          This text is visibe only in portrait mode.
        </MediaQueries>
        <MediaQueries values={[landscape]}>
          This text is visibe only in landscape mode.
        </MediaQueries>
      </p>
      <p>
        <MediaQueries values={[landscape, tablet]}>
          This text is visibe only in landscape mode on tablets and up.
        </MediaQueries>
      </p>
    </>
  );
};

export default MediaQueriesDemo;

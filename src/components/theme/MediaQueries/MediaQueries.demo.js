import React from "react";

/**
 * Imports other components and hooks
 */
import MediaQueries from ".";

/**
 * Displays the component.
 */
const MediaQueriesDemo = (props) => {
  const mobile = "(max-width: 767px)";
  const tablet = "(max-width: 1023px)";
  const tabletPortrait = "(max-width: 1365px)";
  const laptop = "(max-width: 1599px)";
  const desktop = "(max-width: 1920px)";

  return (
    <>
      <MediaQueries values={[mobile]}>
        1. This text is visibe only on mobiles.
      </MediaQueries>
      <br />
      <MediaQueries values={[tablet]}>
        2. This text is visibe only on mobiles and tablets.
      </MediaQueries>
      <br />
      <MediaQueries values={[tabletPortrait]}>
        3. This text is visibe only on mobiles, tablets and tablet portrait.
      </MediaQueries>
      <br />
      <MediaQueries values={[laptop]}>
        4. This text is visibe only below laptop.
      </MediaQueries>
      <br />
      <MediaQueries values={[desktop]}>
        5. This text is visibe only below desktop.
      </MediaQueries>
    </>
  );
};

export default MediaQueriesDemo;

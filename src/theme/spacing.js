/**
 * Every adjacent sibling has a top margin.
 */
const adjacentSiblingsMarginTop = {
  ["& * + *"]: {
    marginTop: `var(--lem)`,
  },
  /**
   * The exceptions
   */
  ["& * + li"]: {
    marginTop: 0,
  },
  ["& tr + tr"]: {
    marginTop: 0,
  },
};

/**
 * Returns a specifing typographic spacing.
 * @param  {string} name The spacing name.
 * @return {object}      The typographic spacing object style.
 */
const spacing = (name) => {
  switch (name) {
    case "Adjacent siblings margin top":
    default:
      return adjacentSiblingsMarginTop;
  }
};

export { spacing };

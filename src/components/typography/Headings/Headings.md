## Headings

### Re-align to grid

- Changing the font size and line height of an element makes the typographic grid broken.
- The new element must add margins/paddings to re-align itself with the original grid.
- Iain Lamb's Typograph makes it right: http://lamb.cc/typograph/ using a different scale than Modular Scale. Right means only for single-line headings. Multi-line headings and other stuff like `<code>` breaks the grid.
- I made my own calculation to work with Modular Scale. Now headings should follow the grid, however due to another problem, the leading trim, the grid gets distorted.

### The leading trim problem

- Browsers can't really get typography right. And there is no cure yet.
- https://css-tricks.com/how-to-tame-line-height-in-css/
- https://medium.com/microsoft-design/leading-trim-the-future-of-digital-typesetting-d082d84b202
- https://www.figma.com/blog/line-height-changes/
- Mark Dalgleish created a workaround until then: https://seek-oss.github.io/capsize/

#### Capsize

1. The font metadata has to be loaded and parsed on the capsize site.
2. The font-size / line-height (leading) combo has to be specified on the capsize site.
3. A Config object is generated.
4. Then 'capsize' can be used to set up new sizes and line heights.

Tried out in `osequi/test-capsize` local repo, works, but it doesn'r fit the grid.

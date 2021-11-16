/* this function maps the colors to their grays are defined
  on https://www.radix-ui.com/docs/colors/palette-composition/composing-a-palette#natural-pairing
*/

export default function determineGrayScale(color) {
  if (
    ['tomato', 'red', 'crimson', 'pink', 'plum', 'purple', 'violet'].includes(
      color
    )
  ) {
    return 'mauve';
  } else if (['indigo', 'blue', 'cyan', 'sky'].includes(color)) {
    return 'slate';
  } else if (['teal', 'mint', 'green'].includes(color)) {
    return 'sage';
  } else if (['grass', 'lime'].includes(color)) {
    return 'olive';
  } else if (['yellow', 'amber', 'orange', 'brown'].includes(color)) {
    return 'sand';
  } else {
    // throw error if invalid color name is passed
    throw new Error(`Unknown Color: ${color}`);
  }
}

/*
  @radix-ui/colors are strucured as -
    radixUIColors.<color-name>.<color-name><shade-number>
      eg. radixUIColors.red.red9 or radixUIColors.redDark.red9
  this file converts this to more usable format -
    radixUIColors.<color-name>.<theme>[<shade-number>]
    shade-number here is 0 indexed
      eg. radixUIColors.red.dark[8] or radixUIColors.red.light[8]
*/

// import all colors from radix-ui
const radixUIColors = require('@radix-ui/colors');

// name of all color scales to be converted
let colors = [
  'tomato',
  'red',
  'crimson',
  'pink',
  'plum',
  'purple',
  'violet',
  'indigo',
  'blue',
  'cyan',
  'teal',
  'green',
  'grass',
  'orange',
  'brown',
  'sky',
  'mint',
  'lime',
  'yellow',
  'amber',
  'gray',
  'mauve',
  'slate',
  'sage',
  'olive',
  'sand',
];

colors = colors.reduce((obj, color) => {
  /* radix-ui contains dark scale as <color-name>Dark. eg, red & redDark
     radixUIColors[color] returns an object of type -
     {
       color1: hsl()
       color2: hsl()
       color3: hsl()
       ...
       ...
     }   
  */
  let variants = [radixUIColors[color], radixUIColors[`${color}Dark`]];
  // convert both dark and light variants to array from object
  variants = variants.map((variant) => {
    // resultant array
    let arr = [];
    for (const [key, value] of Object.entries(variant)) {
      // from <color-name><shade-number> extract shade-number
      arr[key.match(/\d+/)[0] - 1] = value;
    }
    return arr;
  });
  // [0] is array of light scales. [1] is array of dark scales.
  // add that color index to culminating array
  obj[color] = {
    light: variants[0],
    dark: variants[1],
  };
  // pass on the culumator object
  return obj;
}, {});

export default colors;

import * as RadioGroup from '@radix-ui/react-radio-group';
import { useThemeContext } from '../context/ThemeContext';
import RadioItem from '../components/RadioItem';
import { useEffect, useState } from 'react';
const radixUIColors = require('@radix-ui/colors');

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
];

export default function ColorSwatch() {
  const { theme, setTheme } = useThemeContext();
  // currently selected swatch's string
  const [swatch, setSwatch] = useState('');

  /* 
    to change swatch state along with theme synchronously
    theme changes on swatch press that in turns changes
    the swatch state
  */
  const handleRadioChange = (value) => {
    setTheme({
      type: 'UPDATE_COLOR',
      value: value,
    });
  };

  useEffect(() => {
    setSwatch(theme.colorName);
  }, [theme]);

  return (
    <>
      {/* 
        this converts down to div but styling them 
        was causing a swc compile error. thats why className 
        and global styling was done. 
      */}
      <RadioGroup.Root
        value={swatch}
        className="radio_group"
        onValueChange={handleRadioChange}
      >
        {colors.map((color) => {
          const colorNo = color + 9;
          return (
            <RadioItem
              // individual hsl color code is sent to the component
              color={radixUIColors[color][colorNo]}
              colorName={color}
              key={color}
            />
          );
        })}
      </RadioGroup.Root>
      <style jsx global>{`
        .radio_group {
          display: grid;
          /* values are imperical, this looked best on iphone x */
          grid-template-columns: repeat(auto-fill, minmax(5rem, 1fr));
          column-gap: 3rem;
          row-gap: 0.625rem;
        }
        /* 
          by design indicator and focus state are combined
          so there is no way to style the focus separately
          instead label's font thickness is increased to 
          provide a visual feedback of focus state
        */
        .radio_group > div:focus-within > label {
          font-weight: 600;
        }
      `}</style>
    </>
  );
}

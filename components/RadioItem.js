import * as RadioGroup from '@radix-ui/react-radio-group';
import { useThemeContext } from '../context/ThemeContext';

export default function RadioItem({ color, colorName }) {
  const { theme } = useThemeContext();

  return (
    <>
      <div>
        {/* had to inline styling because applying them on styled-jsx
          classes was unexpectedly making other styling disappear 
          particularly the label's
         */}
        <RadioGroup.Item
          className="radio_item"
          style={{ background: color }}
          id={`color_${colorName}`}
          value={colorName}
        >
          {/* this converts down to a span that become child of selected button */}
          <RadioGroup.Indicator
            className="radio_indi"
            style={{
              boxShadow: `0 0 0 2px ${theme.gray[0]}, 0 0 0 4px ${color}`,
            }}
          />
        </RadioGroup.Item>
        <label htmlFor={`color_${colorName}`}>{colorName}</label>
      </div>
      <style jsx>{`
        div {
          display: grid;
          justify-content: center;
        }

        label {
          font-family: 'Inter', sans-serif;
          font-size: 1rem;
          text-align: center;
          /* using directly color from parent 
            which is in lowercase
          */
          text-transform: capitalize;
          // to accommodate select ring
          margin-top: 2px;
        }
      `}</style>

      <style jsx>{`
        label {
          color: ${theme.gray[11]};
        }
      `}</style>

      <style jsx global>{`
        .radio_item {
          all: unset;
          width: 5rem;
          height: 2.5rem;
          border-radius: 0.3rem;
        }
        .radio_indi {
          display: block;
          width: 100%;
          height: 100%;
          border-radius: 0.3rem;
        }
      `}</style>
    </>
  );
}

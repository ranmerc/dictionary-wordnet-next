import * as Switch from '@radix-ui/react-switch';
import { useThemeContext } from '../context/ThemeContext';

export default function SwitchToggle({ id, checked, onCheckedChange }) {
  const { theme } = useThemeContext();

  return (
    <>
      {/* this converts down to button and and a span for thumb
      but styling them was causing a swc compile error.
      thats why className and global styling was done. */}
      <Switch.Root
        className="switch_root"
        checked={checked}
        onCheckedChange={onCheckedChange}
        id={id}
      >
        <Switch.Thumb className="switch_thumb" />
      </Switch.Root>
      <style jsx global>{`
        // this is basically a button
        .switch_root {
          /* don't know if this is required but it was done in 
          the example on the radix primitives website */
          all: unset;
          width: 3.4rem;
          height: 1.6rem;
          border-radius: 1rem;
        }

        // this is basically a span
        .switch_thumb {
          // because you cannot set height width to inline element(thumb uses span element)
          display: block;
          width: 1.25rem;
          height: 1.25rem;
          border-radius: 100%;
          // leave some space on right of the thumb
          transform: translateX(0.25rem);
          transition: transform 100ms;
        }

        // data-state change to checked when switch is turned on
        .switch_thumb[data-state='checked'] {
          // values empirical
          transform: translateX(1.9rem);
        }
      `}</style>
      {/* styled jsx recommends separation of dynamic and static styles */}
      <style jsx global>{`
        .switch_root {
          background-color: ${theme.gray[2]};
          border: 2px solid ${theme.color[8]};
        }

        .switch_root:focus {
          outline: 3px solid ${theme.color[8]};
        }

        .switch_root[data-state='checked'] {
          background-color: ${theme.color[8]};
          border: 2px solid ${theme.gray[2]};
        }

        .switch_thumb {
          background-color: ${theme.color[8]};
        }

        .switch_thumb[data-state='checked'] {
          background-color: ${theme.gray[2]};
        }
      `}</style>
    </>
  );
}

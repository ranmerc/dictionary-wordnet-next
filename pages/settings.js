import Head from 'next/head';
import { useThemeContext } from '../context/ThemeContext';
import Heading from '../components/Heading';
import SwitchToggle from '../components/SwitchToggle';
import ColorSwatch from '../components/ColorSwatch';
import { useEffect, useState } from 'react';

export default function Settings() {
  const { theme, setTheme } = useThemeContext();
  // control state for dark theme switch
  const [checked, setChecked] = useState(false);

  /* 
    to change switch state along with theme synchronously
    theme changes on switch press that in turns changes
    the switch state
  */
  const onSwitchClick = () => {
    setTheme({
      type: 'TOGGLE_MODE',
    });
  };

  useEffect(() => {
    setChecked(theme.darkMode);
  }, [theme]);

  return (
    <>
      <Head>
        <title>Settings</title>
        <meta
          name="description"
          content="Settings page for the dictionary app"
        />
      </Head>
      <main>
        <Heading type="h1">Settings</Heading>
        <section>
          <Heading type="h2">Colorways</Heading>
          {/* prevent page reload on form submit */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div>
              <label htmlFor="switch_dark_mode">Dark Mode</label>
              <SwitchToggle
                id="switch_dark_mode"
                checked={checked}
                onCheckedChange={onSwitchClick}
              />
            </div>
            <ColorSwatch />
          </form>
        </section>
        <style jsx>{`
          main {
            display: grid;
            row-gap: 2.2rem;
          }

          label {
            font-family: 'Inter', sans-serif;
            font-size: 1.2rem;
            font-weight: 600;
          }

          section {
            display: grid;
            row-gap: 1.56rem;
          }

          form {
            display: grid;
            row-gap: 1.25rem;
          }

          form > div {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
        `}</style>
        <style jsx>{`
          label {
            color: ${theme.color[10]};
          }
        `}</style>
      </main>
    </>
  );
}

import Head from 'next/head';
import Heading from '../components/Heading';
import { useEffect, useState } from 'react';
import ColorSwatch from '../components/ColorSwatch';
import SwitchToggle from '../components/SwitchToggle';
import { useThemeContext } from '../context/ThemeContext';

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
        <section>
          <Heading type="h2">About</Heading>
          <p>
            This is a frontend for Wordnet much like{' '}
            <a href="http://wordnetweb.princeton.edu/perl/webwn">
              Wordnet Online
            </a>{' '}
            but simple and modern . This is an open source project, check it out
            on{' '}
            <a href="https://github.com/deadmercury/dictionary-wordnet-next">
              Github
            </a>
            .
          </p>
        </section>
        {/* 
          wordnet citation 
          https://wordnet.princeton.edu/citing-wordnet 
        */}
        <section>
          <Heading type="h2">Citation</Heading>
          <p>
            Princeton University "About WordNet."{' '}
            <a href="https://wordnet.princeton.edu">WordNet</a>. Princeton
            University. 2010.&nbsp;
          </p>
        </section>
        <style jsx>{`
          main {
            display: grid;
            row-gap: 2.2rem;
            font-family: 'Inter', sans-serif;
          }

          label {
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
          p {
            color: ${theme.gray[11]};
          }
          a {
            color: ${theme.color[10]};
          }
        `}</style>
      </main>
    </>
  );
}

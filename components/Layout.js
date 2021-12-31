// Provides a basic skeleton to the app
import Head from 'next/head';
import { useThemeContext } from '../context/ThemeContext';

export default function Layout({ children }) {
  const { theme } = useThemeContext();

  return (
    <>
      <Head>
        <meta name="theme-color" content={`${theme.color[8]}`} />
      </Head>
      <div>{children}</div>
      <style jsx>{`
        div {
          /* 
            using 5rem because min-height 100vh 
            not working on body
          */
          margin: 2.8rem 0.75rem 5rem 0.75rem;
        }

        /*
          on bigger screens don't add margins
          just make columns for navigation and
          content
        */
        @media (min-width: 640px) {
          div {
            margin: 0;
            display: grid;
            grid-template-columns: auto 1fr;
          }
        }
      `}</style>
      {/* separate dynamic and static styles */}
      <style jsx global>{`
        body {
          background-color: ${theme.gray[0]};
        }
        div {
          color-scheme: ${theme.darkMode ? 'dark' : 'light'};
        }
      `}</style>
    </>
  );
}

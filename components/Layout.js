// Provides a basic skeleton to the app

import { useThemeContext } from '../context/ThemeContext';

export default function Layout({ children }) {
  const { theme } = useThemeContext();

  return (
    <>
      <div>{children}</div>
      <style jsx>{`
        div {
          /* using 5rem because min-height 100vh 
             not working on body
          */
          margin: 2.8rem 0.75rem 5rem 0.75rem;
        }

        // on bigger screen
        @media (min-width: 640px) {
          div {
            margin-right: auto;
            margin-left: auto;
            width: 80vw;
          }
        }
      `}</style>
      {/* separate dynamic and static styles */}
      <style jsx global>{`
        body {
          background-color: ${theme.gray[0]};
        }
      `}</style>
    </>
  );
}

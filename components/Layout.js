// Provides a basic skeleton to the app

import { useThemeContext } from '../context/ThemeContext';

export default function Layout({ children }) {
  const { theme } = useThemeContext();
  return (
    <>
      <div>{children}</div>
      <style jsx>{`
        div {
          margin: 2.8rem 0.75rem 1rem 0.75rem;
        }

        // on bigger screen
        @media (min-width: 640px) {
          div {
            margin: 2.8rem auto 1rem;
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

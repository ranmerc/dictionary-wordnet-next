import { useThemeContext } from '../context/ThemeContext';

export default function ListMessage({ children }) {
  const { theme } = useThemeContext();

  return (
    <>
      <p role="alert">{children}</p>
      <style jsx>{`
        p {
          font-family: 'Inter', sans-serif;
          font-size: 1.125rem;
          text-align: center;
        }
        @media (min-width: 640px) {
          p {
            text-align: initial;
          }
        }
      `}</style>
      <style jsx>{`
        p {
          color: ${theme.color[11]};
        }
      `}</style>
    </>
  );
}

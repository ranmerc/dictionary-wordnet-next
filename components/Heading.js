import { useThemeContext } from '../context/ThemeContext';

export default function Heading({ children, type }) {
  const { theme } = useThemeContext();
  return (
    <>
      {/* return wrapped tag based on type */}
      {type === 'h1' && <h1>{children}</h1>}
      {type === 'h2' && <h2>{children}</h2>}
      <style jsx>{`
        h1,
        h2 {
          font-family: 'Inter', sans-serif;
        }

        h1 {
          font-size: 2.75rem;
          font-weight: 800;
        }

        h2 {
          font-size: 1.6rem;
          font-weight: 700;
        }
      `}</style>
      {/* separating dynamic and static styles */}
      <style jsx>{`
        h1,
        h2 {
          color: ${theme.color[10]};
        }
      `}</style>
    </>
  );
}

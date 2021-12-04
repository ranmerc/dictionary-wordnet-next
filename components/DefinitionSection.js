import { useThemeContext } from '../context/ThemeContext';

export default function DefinitionSection({ def, exp }) {
  const { theme } = useThemeContext();

  return (
    <>
      <p>
        {def}

        {exp.map((ex) => {
          return (
            <span key={ex}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="8px"
                height="8px"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <g fill="none">
                  <circle cx="12" cy="12" r="11" fill="currentColor" />
                </g>
              </svg>
              <span>{ex}</span>
            </span>
          );
        })}
      </p>
      <style jsx>{`
        p {
          font-size: 1.25rem;
          line-height: 1.7rem;
        }
        // very ugly selectors
        p > span {
          margin-left: 0.3rem;
          font-size: 1.1rem;
        }
        p > span > svg {
          margin-right: 0.1rem;
          vertical-align: middle;
        }
      `}</style>
      <style jsx>{`
        p {
          color: ${theme.gray[11]};
        }
        p > span > span {
          color: ${theme.color[10]};
        }
      `}</style>
    </>
  );
}

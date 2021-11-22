import Link from 'next/link';
import { useThemeContext } from '../context/ThemeContext';

export default function SearchListItem({ lemma, pos, def, sense }) {
  const { theme } = useThemeContext();
  return (
    <>
      <Link href={`/define/${sense}`}>
        <a>
          <div>
            <h3>{lemma.replace(/\_/g, ' ')}</h3>
            <span>
              {`(${pos.replace(/./, (match) => {
                switch (match) {
                  case 'n':
                    return 'noun';
                  case 'a':
                    return 'adjective';
                  case 'v':
                    return 'verb';
                  case 'r':
                    return 'adverb';
                  case 's':
                    return 'sat adj';
                  default:
                    console.log(match);
                    return 'unknown';
                }
              })})`}
            </span>
          </div>
          <p>{def}</p>
        </a>
      </Link>
      <style jsx>{`
        a {
          display: grid;
          row-gap: 0.5rem;
          border-radius: 0.5rem;
          text-decoration: none;
          font-family: 'Inter', sans-serif;
          padding: 1rem 0.8rem 1.25rem;
          // if the word is long scroll horizontally
          overflow-x: hidden;
        }
        div {
          display: flex;
          column-gap: 0.2rem;
          align-items: baseline;
          // if the word is long scroll horizontally
          overflow-x: auto;
        }
        h3 {
          font-weight: 700;
          font-size: 1.625rem;
        }
        span {
          font-size: 0.8125rem;
          font-style: italic;
        }
        p {
          font-size: 0.875rem;
        }
      `}</style>
      <style jsx>{`
        a {
          background-color: ${theme.color[2]};
          color: ${theme.color[11]};
        }
        a:focus {
          background-color: ${theme.color[3]};
        }
        a:active {
          background-color: ${theme.color[4]};
        }
      `}</style>
    </>
  );
}

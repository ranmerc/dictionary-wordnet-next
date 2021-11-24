import DefineSection from './DefineSection';
import { useThemeContext } from '../context/ThemeContext';

export default function XRefSection({ lemma }) {
  const { theme } = useThemeContext();

  return (
    <>
      <DefineSection heading="X-Ref">
        <div>
          <a
            href={`https://www.google.com/search?q=${lemma}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Google
          </a>
          <a
            href={`https://en.wikipedia.org/wiki/${lemma}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Wikipedia
          </a>
          <a
            href={`https://en.wiktionary.org/wiki/${lemma}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Wikitionary
          </a>
          <style jsx>{`
            div {
              display: grid;
              width: fit-content;
              grid-auto-flow: column;
              column-gap: 1rem;
              font-size: 1.1rem;
            }
          `}</style>
          <style jsx>{`
            a {
              color: ${theme.gray[11]};
            }
          `}</style>
        </div>
      </DefineSection>
    </>
  );
}

import DefineSection from './DefineSection';
import { useThemeContext } from '../context/ThemeContext';

export default function SimilarSection({ synonyms }) {
  const { theme } = useThemeContext();
  return (
    <>
      <DefineSection heading="Similar">
        <div>
          {synonyms.map((synonym) => {
            return <span key={synonym}>{synonym}</span>;
          })}
        </div>
      </DefineSection>
      <style jsx>{`
        div {
          display: flex;
          column-gap: 1rem;
          flex-wrap: wrap;
          row-gap: 0.2rem;
        }
      `}</style>
      <style jsx>{`
        div {
          color: ${theme.gray[11]};
        }
      `}</style>
    </>
  );
}

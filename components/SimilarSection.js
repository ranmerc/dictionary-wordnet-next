import DefineSection from './DefineSection';

export default function SimilarSection({ synonyms }) {
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
    </>
  );
}

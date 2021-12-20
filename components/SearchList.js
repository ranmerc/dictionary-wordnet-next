export default function SearchList({ children }) {
  return (
    <>
      <section>{children}</section>
      <style jsx>{`
        section {
          display: grid;
          row-gap: 1rem;
          overflow-y: auto;
        }
      `}</style>
    </>
  );
}

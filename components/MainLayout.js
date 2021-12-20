export default function MainLayout({ children }) {
  return (
    <>
      <main>{children}</main>
      <style jsx>{`
        main {
          display: flex;
          flex-direction: column;
          row-gap: 2.2rem;
          /*
            ugly solution
            2.8rem top + 5rem bottom
          */
          height: calc(100vh - 7.8rem);
          overflow-y: hidden;
        }

        /*
          on bigger screens center content
        */
        @media (min-width: 640px) {
          main {
            margin: 4rem auto 2rem;
            /*
              ugly solution
              4rem top + 2rem bottom
            */
            height: calc(100vh - 6rem);
            width: 70%;
          }
        }
      `}</style>
    </>
  );
}

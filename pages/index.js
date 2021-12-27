export default function Index() {
  return null;
}

export async function getServerSideProps(context) {
  return {
    redirect: {
      permanent: false,
      destination: '/search',
    },
  };
}

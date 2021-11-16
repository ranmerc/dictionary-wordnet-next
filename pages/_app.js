import '../styles/global.css';
import { ThemeProvider } from '../context/ThemeContext';
import Layout from '../components/Layout';
import NavBar from '../components/NavBar';
import Head from 'next/head';
import { IdProvider } from '@radix-ui/react-id';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {/* from radixui for consistent ssr */}
      <IdProvider>
        <ThemeProvider>
          {/* custom layout skeleton for the app */}
          <Layout>
            <Component {...pageProps} />
          </Layout>
          {/* nav bar present on every page */}
          <NavBar />
        </ThemeProvider>
      </IdProvider>
    </>
  );
}

export default MyApp;

import Head from 'next/head';
import '../styles/global.css';
import NavBar from '../components/NavBar';
import Layout from '../components/Layout';
import { IdProvider } from '@radix-ui/react-id';
import { ThemeProvider } from '../context/ThemeContext';
import { QueryProvider } from '../context/QueryContext';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {/* from radixui for consistent ssr */}
      <IdProvider>
        <ThemeProvider>
          {/* persistent query input between page navigation */}
          <QueryProvider>
            {/* custom layout skeleton for the app */}
            <Layout>
              <Component {...pageProps} />
            </Layout>
            {/* nav bar present on every page */}
            <NavBar />
          </QueryProvider>
        </ThemeProvider>
      </IdProvider>
    </>
  );
}

export default MyApp;

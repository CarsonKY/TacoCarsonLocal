import Layout from "../components/Layout";
import '../styles/globals.css'

// Wrap Navbar and Footer components on every page

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
  <Component {...pageProps} />
  </Layout>
  );
}

export default MyApp;

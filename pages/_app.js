import '../styles/globals.css'

import Layout from "../components/layout/Layout"

// index.js is the root page for our app
// this is the root component next.js will render 
// Component propos => is the page content
// pageProps props => is  pageProps :p
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>)
}

export default MyApp

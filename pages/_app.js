import PropTypes from "prop-types"
// next
import Head from "next/head"
// containers
import Wrapper from "../containers/Wrapper"

/**
 * MyApp Component
 * @component
 * @description Componente principal
 */
const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>EvilCat</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Sans+Condensed:wght@100;700&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#000000" />
      </Head>
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
    </>
  )
}

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
}

export default MyApp

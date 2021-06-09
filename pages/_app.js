import "../styles/globals.css"
import NavHeader from "../components/sets/NavHeader"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavHeader />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

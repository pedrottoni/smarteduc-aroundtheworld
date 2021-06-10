import "../styles/globals.css"
import NavHeader from "../components/sets/NavHeader"
import NavBreadcrumb from "../components/sets/NavBreadcrumb"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavHeader />
      <NavBreadcrumb />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

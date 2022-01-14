import '../styles/globals.css'
import Navbar from "../components/nav";
import Footer from "../components/footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </>
  )
}

export default MyApp
//https://metatags.io
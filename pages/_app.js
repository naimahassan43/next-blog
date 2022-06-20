import "../styles/globals.css";
import NavBar from "./../components/NavBar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

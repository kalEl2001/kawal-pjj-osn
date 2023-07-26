import { useEffect } from "react";
import { useRouter } from "next/router";
import AOS from "aos";

import "aos/dist/aos.css";

import "@/styles/globals.css";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Title from "@/components/Title";
import NavBar from "@/components/NavBar";

const App = ({ Component, pageProps }) => {
  const router = useRouter();

  useEffect(() => {
    AOS.init({
      easing: "ease-in-out-sine",
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <>
      <Title />
      {router.pathname !== "/" && <NavBar />}
      <Component {...pageProps} />
    </>
  );
};

export default App;

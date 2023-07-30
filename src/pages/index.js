import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import CustomButton from "@/components/CustomButton";
import { Grid } from "@mui/material";
import ButtonArray from "@/components/ButtonArray";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  return (
    <>
      <Head>
        {/* use NEXT_PUBLIC_EVENT_NAME as page title */}
        <title>{process.env.NEXT_PUBLIC_EVENT_NAME}</title>
        <meta
          name="description"
          content="Pre-Indonesian-NOI Training Tracker"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <ButtonArray />
      </main>
    </>
  );
};

export default Home;

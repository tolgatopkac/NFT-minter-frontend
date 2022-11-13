import { Box, Center, Spacer, Stack } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Disconnected from "../components/Disconnected";
import { useWallet } from "@solana/wallet-adapter-react";
import Connected from "../components/Connected";

const Home: NextPage = () => {
  const { connected } = useWallet();

  return (
    <div className={styles.container}>
      <Head>
        <title>NFT Minter Frontend</title>
        <meta name="The NFT Collection for Buildoors" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box
        w="full"
        h="calc(100vh)"
        bgImage={connected ? "" : "url(/home-background.svg)"}
        bgColor={connected ? "#f8e6ca" : ""}
        backgroundPosition="center"
      >
        <Stack w="full" h="calc(100vh)" justify="center">
          <Navbar />

          <Spacer />
          <Center>{connected ? <Connected /> : <Disconnected />}</Center>
          <Spacer />
        </Stack>
      </Box>
    </div>
  );
};

export default Home;

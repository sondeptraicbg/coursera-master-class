import React, { useRef } from "react";
import styles from "./_.module.scss";
import Head from "next/head";
import Layout from "components/layout";

const Deck = () => {
  return (
    <div>
      <img className="w-full" src="imgs/methods.png" alt="" />
    </div>
  );
};

const AboutMe = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>About us</title>
      </Head>
      <Deck />
    </div>
  );
};

AboutMe.getLayout = Layout;
export default AboutMe;

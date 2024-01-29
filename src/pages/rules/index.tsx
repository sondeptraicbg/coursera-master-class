import React, { useState } from "react";
import styles from "./_.module.scss";
import Layout from "components/layout";
import Head from "next/head";

const Deck = () => {
  return (
    <div>
      <img className="w-full" src="imgs/methods.png" alt="" />
    </div>
  );
};

const GoldenRules = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nguyên tắc vàng</title>
      </Head>
      <Deck />
    </div>
  );
};
GoldenRules.getLayout = Layout;
export default GoldenRules;

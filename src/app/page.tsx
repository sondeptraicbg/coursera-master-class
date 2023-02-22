import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <div></div>
        <div className={styles.logoContainer}>
          <ul>
            <li>
              <div className={`${styles.logoHolder} ${styles.logo}`}>
                <a href="">
                  <div className={styles.left}>
                    <h3>Learning English</h3>
                    <p>never easy like that</p>
                  </div>
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div></div>
      </div>
    </main>
  );
}

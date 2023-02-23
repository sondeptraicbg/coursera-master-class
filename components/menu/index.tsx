"use client";

import { forwardRef, useState } from "react";
import styles from "./_.module.scss";
const Menu = forwardRef(() => {
  const [isShow, setShow] = useState<boolean>(false);
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
        onClick={() => setShow((prev) => !prev)}
        style={{ width: 20 }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
        />
      </svg>
      <div className={`${styles.menu} ${isShow && styles.active}`}>
        <div className={styles.close}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div className={styles.menuCard}></div>
        <div className={styles.menuCard}></div>
        <div className={styles.menuCard}></div>
      </div>
    </>
  );
});

export default Menu;

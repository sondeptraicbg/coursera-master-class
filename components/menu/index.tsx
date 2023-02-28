import Link from "next/link";

import { forwardRef, useState } from "react";
import styles from "./_.module.scss";
const Menu = forwardRef(() => {
  const [isShow, setShow] = useState<boolean>(false);
  return (
    <>
      {!isShow && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
          onClick={() => setShow((prev) => !prev)}
          style={{ width: "2rem" }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
          />
        </svg>
      )}
      <div className={`${styles.menu} ${isShow && styles.active}`}>
        <div className={styles.menuCard}>
          {isShow && (
            <div
              className={styles.close}
              onClick={() => {
                setShow(!isShow);
              }}
            >
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
          )}
          <Link href={"/about-me"}>
            <p>Tác giả</p>
          </Link>
        </div>
        <div className={styles.menuCard}>
          <Link href={"/rules"}>
            <p>Nguyên tắc</p>
          </Link>
        </div>
        <div className={styles.menuCard}>
          <Link href={"/how-to-learn"}>
            <p>Cách học</p>
          </Link>
        </div>
        <div className={styles.menuCard}>
          <Link href={"/learn"}>
            <p>Học</p>
          </Link>
        </div>
      </div>
    </>
  );
});

export default Menu;

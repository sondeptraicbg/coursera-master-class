import Image from "next/image";
import Layout from "components/layout";
import Head from "next/head";
import { useRouter } from "next/router";
import styles from "./_.module.scss";
type tocData = {
  id: number;
  content: string;
  image: string;
  src: string;
};

const tocs: tocData[] = [
  {
    id: 2,
    content: "Mã môn: WED",
    image: "/table-of-contents/hello.png",
    src: "/group-age/age3",
  },
  {
    id: 3,
    content: "Mã môn: ENW",
    image: "/table-of-contents/one-hundred.png",
    src: "/group-age/age4",
  },
  {
    id: 4,
    content: "Mã môn: NWC",
    image: "/table-of-contents/one-hundred.png",
    src: "/group-age/age5",
  },
  {
    id: 5,
    content: "Mã môn: SSL",
    image: "/table-of-contents/number-blocks.png",
    src: "/group-age/age6",
  },
];

const TableOfContents = () => {
  const router = useRouter();

  const moveOnPage = (link: string) => {
    router.push(link);
  };

  return (
    <div id={styles.content}>
      <Head>
        <title>Mục lục</title>
      </Head>
      {/* <div id={styles.tocContainer} className={styles.noBullets}>
        <p className={styles.tocTitle}>Các môn học</p>
        <ul className={styles.tocList}>
          {tocs.map((tocs) => (
            <li key={`toc_${tocs.id}`}>
              <div className={styles.a} onClick={() => router.push(tocs.src)}>
                <span className={styles.tocNumber}></span> {tocs.content}
                <Image
                  src={tocs.image}
                  alt=""
                  width={24}
                  height={24}
                  className={styles.image}
                />
              </div>
            </li>
          ))}
        </ul>
      </div> */}
      <div className={styles.practice}>
        <span>Tóm tắt kiến thức</span>
        <div
          className={styles.practiceItem}
          onClick={() => {
            moveOnPage("/love");
          }}
        >
          <p>WED</p>
        </div>

        <div
          className={styles.practiceItem}
          onClick={() => {
            moveOnPage("/practice");
          }}
        >
          <h2>NWC</h2>
          <p style={{ color: "#7f7f7f" }}>Networking</p>
        </div>
      </div>
      <div className={styles.practice}>
        <span>Tóm tắt kiến thức</span>
        <div
          className={styles.practiceItem}
          onClick={() => {
            moveOnPage("/love");
          }}
        >
          <p>ENW</p>
        </div>

        <div
          className={styles.practiceItem}
          onClick={() => {
            moveOnPage("/practice");
          }}
        >
          <h2>SSL</h2>
          <p style={{ color: "#7f7f7f" }}>University Success</p>
        </div>
      </div>
    </div>
  );
};
TableOfContents.getLayout = Layout;
export default TableOfContents;

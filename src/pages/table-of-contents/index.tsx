import styles from "./_.module.scss";
import Image from "next/image";
import Layout from "components/layout";
import Head from "next/head";

type tocData = {
  id: number;
  content: string;
  image: string;
  src: string;
};

const tocs: tocData[] = [
  {
    id: 1,
    content: "Bảng chữ cái",
    image: "/table-of-contents/abcd.png",
    src: "/alphabet",
  },
  {
    id: 2,
    content: "Chào hỏi",
    image: "/table-of-contents/hello.png",
    src: "#",
  },
  {
    id: 3,
    content: "100 từ thông dụng nhất",
    image: "/table-of-contents/one-hundred.png",
    src: "#",
  },
  {
    id: 4,
    content: "100 từ thông dụng nhất (2)",
    image: "/table-of-contents/one-hundred.png",
    src: "#",
  },
  {
    id: 5,
    content: "Học số đếm",
    image: "/table-of-contents/number-blocks.png",
    src: "#",
  },
  {
    id: 6,
    content: "Học ngày tháng, thứ",
    image: "/table-of-contents/schedule.png",
    src: "#",
  },
  {
    id: 7,
    content: "Học màu sắc, hình dạng",
    image: "/table-of-contents/color-palette.png",
    src: "#",
  },
  {
    id: 8,
    content: "Chủ đề gia đình",
    image: "/table-of-contents/family.png",
    src: "#",
  },
  {
    id: 9,
    content: "Chủ đề nhà cửa",
    image: "/table-of-contents/house.png",
    src: "#",
  },
  {
    id: 10,
    content: "Chủ đề trường học",
    image: "/table-of-contents/school.png",
    src: "#",
  },
  {
    id: 11,
    content: "Chủ đề giáo dục",
    image: "/table-of-contents/presentation.png",
    src: "#",
  },
  {
    id: 12,
    content: "Chủ đề môi trường",
    image: "/table-of-contents/save-the-planet.png",
    src: "#",
  },
  {
    id: 13,
    content: "Chủ đề giao thông, đi lại",
    image: "/table-of-contents/traffic.png",
    src: "#",
  },
  {
    id: 14,
    content: "Chủ đề giải trí",
    image: "/table-of-contents/smartphone.png",
    src: "#",
  },
  {
    id: 15,
    content: "Chủ đề văn hoá",
    image: "/table-of-contents/carrying.png",
    src: "#",
  },
  {
    id: 16,
    content: "Chủ đề mua sắm",
    image: "/table-of-contents/online-shop.png",
    src: "#",
  },
  {
    id: 17,
    content: "Chủ đề công nghệ",
    image: "/table-of-contents/innovation.png",
    src: "#",
  },
  {
    id: 18,
    content: "Chủ đề sức khoẻ",
    image: "/table-of-contents/healthcare.png",
    src: "#",
  },
  {
    id: 19,
    content: "Phụ lục 1",
    image: "/table-of-contents/attached-file.png",
    src: "#",
  },
  {
    id: 20,
    content: "Phụ lục 2",
    image: "/table-of-contents/attached-file.png",
    src: "#",
  },

  // Add as many cards as you need
];

const TableOfContents = () => {
  return (
    <div id={styles.content}>
      <Head>
        <title>Mục lục</title>
      </Head>
      <div id={styles.tocContainer} className={styles.noBullets}>
        <p className={styles.tocTitle}>Mục lục</p>
        <ul className={styles.tocList}>
          {tocs.map((tocs, index) => (
            <li key={`toc_${index}`}>
              <a href={tocs.src}>
                <span className={styles.tocNumber}></span> {tocs.content}
                <Image
                  src={tocs.image}
                  alt=""
                  width={24}
                  height={24}
                  className={styles.image}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
TableOfContents.getLayout = Layout;
export default TableOfContents;

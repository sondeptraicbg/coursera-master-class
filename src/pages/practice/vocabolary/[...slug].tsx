import Layout from "components/layout";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import styles from "./_.module.scss";

const ranges = [
  [30, 43, 52, 59, 69, 86, 97, 110, 122, 132],
  [140, 150, 158, 167, 178, 187, 209, 216, 225, 132],
  [236, 242, 249, 256, 264, 273, 283, 293, 301, 316],
  [334, 350, 358, 367, 375, 386, 396, 417, 424, 433],
  [442, 451, 462, 472, 478, 488, 499, 507, 515, 524],
  [534, 540, 549, 565, 574, 588, 601, 612, 620, 626],
  [640, 655, 665, 674, 684, 694, 706, 713, 720, 729],
  [739, 749, 758, 769, 780, 791, 801, 809, 819, 826],
  [837, 849, 859, 866, 873, 884, 893, 903, 909, 916],
];

const Vocabolary = () => {
  const [topic, setTopic] = useState("");
  const [data, setData] = useState([]);
  const index = useRef(0);
  const router = useRouter();
  const { slug } = router.query;
  const age = slug ? Number(slug[0]) : 0;
  const id = slug ? Number(slug[1]) : 0;
  console.log(slug);
  console.log(age);
  console.log(id);

  useEffect(() => {
    if (!age || !id) {
      return;
    }
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://sheets.googleapis.com/v4/spreadsheets/11l2MvPp3h7MiFaf5svxGQFe84U8u-hmLNJPP-euziCg/values/basic!B${
            ranges[age - 4][id - 1]
          }:C${
            ranges[age - 4][id - 1]
          }?majorDimension=COLUMNS&key=AIzaSyBEC-5QDF7ocl-iJpC_vyXJjKyCdlR39i0`
        );
        if (!response) {
          return;
        }
        const jsonData = await response.json();
        const filteredData = jsonData.values.map((row: any) =>
          row.filter((cell: any) => cell !== "")
        );
        setTopic(filteredData[0]);
        setData(filteredData[1][0].split(","));
      } catch (error) {
        console.log("an error occurred", error);
      }
    };
    fetchData();
  }, [age, id]);

  if (!age || !id) {
    return (
      <div>
        <span>Can not load data</span>
      </div>
    );
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <span>Ôn tập từ vựng - Chủ để: {topic}</span>
        </div>

        <div className={styles.tag}>
          <span>{JSON.stringify(data)}</span>
        </div>
        <div className={styles["switch-button"]}>
          <button className={styles["button-up"]}></button>
          <span
            style={{ paddingTop: "30px" }}
          >{`${index.current} / ${data.length}`}</span>
          <button className={styles["button-down"]}></button>
        </div>
      </div>
    </>
  );
};

Vocabolary.getLayout = Layout;
export default Vocabolary;

import Layout from "components/layout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "./_.module.scss";
import { GOOGLE_API_PRE, GOOGLE_API_KEY, COLUMNS } from "constants/googleapi";
// const ranges = [
//   [30, 43, 52, 59, 69, 86, 97, 110, 122, 132],
//   [140, 150, 158, 167, 178, 187, 209, 216, 225, 132],
//   [236, 242, 249, 256, 264, 273, 283, 293, 301, 316],
//   [334, 350, 358, 367, 375, 386, 396, 417, 424, 433],
//   [442, 451, 462, 472, 478, 488, 499, 507, 515, 524],
//   [534, 540, 549, 565, 574, 588, 601, 612, 620, 626],
//   [640, 655, 665, 674, 684, 694, 706, 713, 720, 729],
//   [739, 749, 758, 769, 780, 791, 801, 809, 819, 826],
//   [837, 849, 859, 866, 873, 884, 893, 903, 909, 916],
// ];

const ranges2 = [
  [30, 132],
  [140, 225],
  [236, 316],
  [334, 433],
  [442, 524],
  [534, 626],
  [640, 729],
  [739, 826],
  [837, 916],
];

const Vocabolary = () => {
  const [topic, setTopic] = useState("");
  const [data, setData] = useState([]);
  const router = useRouter();
  const { slug } = router.query;
  const age = slug ? Number(slug[0]) : 0;
  const id = slug ? Number(slug[1]) : 0;

  useEffect(() => {
    if (!age || !id) {
      return;
    }
    const fetchData = async () => {
      try {
        //Fetch google api
        const response = await fetch(
          `${GOOGLE_API_PRE}basic!B${ranges2[age - 4][0]}:E${
            ranges2[age - 4][1]
          }${COLUMNS}${GOOGLE_API_KEY}`
        );
        if (!response) {
          return;
        }
        const jsonData = await response.json();
        const filteredData = jsonData.values.map((row: any) =>
          row.filter((cell: any) => cell !== "")
        );
        setTopic(filteredData[0][id - 1]);
        setData(filteredData);
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
          <span>Lứa tuổi: {age}</span>
        </div>
        <div className={styles.content}>
          <FlashCard data={data} id={id} />
        </div>
      </div>
    </>
  );
};

const FlashCard = ({ data, id }) => {
  const [index, setIndex] = useState(0);
  const [indexTopic, setIndexTopic] = useState(id);
  const [topics, setTopics] = useState([]);
  const [newWords, setNewWords] = useState([]);
  const [dialogues, setDialogues] = useState([]);
  const router = useRouter();
  const len = newWords.length;
  console.log(data);

  useEffect(() => {
    if (!data) {
      return;
    }
    const setData = async () => {
      try {
        setTopics(data[0]);
        setNewWords(data[1][indexTopic].split(","));
        setDialogues(data[3]);
        console.log(indexTopic);
        console.log(newWords);
      } catch (error) {
        console.log("error", error);
      }
    };
    setData();
  }, [data, indexTopic]);

  const handleSwithWord = (value) => {
    if (index >= len - 1 && value > 0) {
      setIndex(0);
    } else if (index <= 0 && value < 0) {
      setIndex(len - 1);
    } else {
      setIndex(index + value);
    }
  };

  const handleSwichTopic = (value) => {
    if (value === indexTopic) {
      return;
    }
    setIndex(0);
    setIndexTopic(value);
  };

  const moveOnPage = (link: string) => {
    router.push(link);
  };

  if (!topics) {
    return (
      <>
        <div>
          <span>Can not read data</span>
        </div>
      </>
    );
  }

  return (
    <>
      {/* NAVIGATE BUTTONS */}
      <div className={styles.navigateButtons}>
        <div
          onClick={() => {
            moveOnPage("/table-of-contents");
          }}
        >
          <span>Trở lại phần luyện nghe và ôn tập</span>
        </div>
        <div
          onClick={() => {
            moveOnPage("/practice");
          }}
        >
          <span>Trở lại phần ôn tập từ vựng</span>
        </div>
      </div>
      {/* FLASH CARDS */}
      <div className={styles.flashCard}>
        <div className={styles.tag}>
          <span>{newWords[index]}</span>
        </div>

        <div className={styles["switch-button"]}>
          <button
            onClick={() => handleSwithWord(-1)}
            className={styles["button-up"]}
          ></button>
          <span>{`${index + 1} / ${newWords.length}`}</span>
          <button
            onClick={() => handleSwithWord(1)}
            className={styles["button-down"]}
          ></button>
        </div>

        <div className={styles.example}>
          <span>Ví dụ:</span> <br />
          {dialogues.find((dialogue: string) => {
            return (
              dialogue.includes(newWords[index] + " ") ||
              dialogue.includes(newWords[index] + "?") ||
              dialogue.includes(newWords[index] + ".") ||
              dialogue.includes(newWords[index] + "s") ||
              dialogue.includes(newWords[index] + "es") ||
              dialogue.includes(newWords[index] + ",")
            );
          })}
        </div>
      </div>

      {/* SIDE BAR */}
      <div className={styles.otherTopics}>
        <div style={{ borderBottom: "1px solid black" }}>
          <span>Các chủ đề trong cùng lứa tuổi</span>
        </div>
        {topics.map((topic, index) =>
          index === indexTopic ? (
            <button
              style={{ backgroundColor: "#e3eaea" }}
              className={styles.topic}
              key={topic}
              onClick={() => {
                handleSwichTopic(index);
              }}
            >
              <span>{topic}</span>
            </button>
          ) : (
            <button
              className={styles.topic}
              key={topic}
              onClick={() => {
                handleSwichTopic(index);
              }}
            >
              <span>{topic}</span>
            </button>
          )
        )}
      </div>
    </>
  );
};

Vocabolary.getLayout = Layout;
export default Vocabolary;

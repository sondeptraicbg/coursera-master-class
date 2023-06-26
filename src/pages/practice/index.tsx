import Layout from "components/layout";
import { link } from "fs";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "./_.module.scss";
import { GOOGLE_API_KEY, GOOGLE_API_PRE, ROWS } from "constants/googleapi";
type age = {
  id: number;
  name: string;
  background: string;
};

const ages: age[] = [
  {
    id: 4,
    name: "Lứa tuổi 4",
    background: "/imgs/age4/4.1.jpg",
  },
  {
    id: 5,
    name: "Lứa tuổi 5",
    background: "/imgs/age5/5.1.jpg",
  },
  {
    id: 6,
    name: "Lứa tuổi 6",
    background: "/imgs/age6/6.1.jpg",
  },
  {
    id: 7,
    name: "Lứa tuổi 7",
    background: "/imgs/age7/7.1.jpg",
  },
  {
    id: 8,
    name: "Lứa tuổi 8",
    background: "/imgs/age8/8.1.jpg",
  },
  {
    id: 9,
    name: "Lứa tuổi 9",
    background: "/imgs/age9/9.1.jpg",
  },
  {
    id: 10,
    name: "Lứa tuổi 10",
    background: "/imgs/age10/10.1.jpg",
  },
  {
    id: 11,
    name: "Lứa tuổi 11",
    background: "/imgs/age11/11.1.jpg",
  },
  {
    id: 12,
    name: "Lứa tuổi 12",
    background: "/imgs/age12/12.1.jpg",
  },
];

const AgeGroup = ({ allTopic }) => {
  const [id, setId] = useState(-1);
  const router = useRouter();

  const handleClick = (index) => {
    if (index == id) {
      setId(-1);
    } else {
      setId(index);
    }
  };

  const moveOnPage = (link: string) => {
    router.push(link);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span>Từ vựng theo lứa tuổi</span>
      </div>

      {ages.map((age, index) => (
        <>
          <button onClick={() => handleClick(index)} key={age.id}>
            <div className={styles.item}>
              <div
                style={{
                  backgroundImage: `linear-gradient(to right, rgba(245, 246, 252, 0.4), rgba(117, 19, 93, 0.83)), url(${age.background})`,
                }}
                className={styles.backimg}
              ></div>
              <div className={styles.showAge}>{age.id}</div>
            </div>
          </button>
          {id === index && (
            <div className={styles.topics}>
              {allTopic[index].map((topic, index) => (
                <div
                  className={styles.topic}
                  key={topic}
                  onClick={() => {
                    moveOnPage(`/practice/vocabolary/${age.id}/${index + 1}`);
                  }}
                >
                  {topic}
                </div>
              ))}
            </div>
          )}
        </>
      ))}
    </div>
  );
};

const Practice = () => {
  const [allTopic, setAllTopic] = useState([]);
  const [error, setError] = useState("");
  const RANGE_SHEET = "basic!B4:K12";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${GOOGLE_API_PRE}${RANGE_SHEET}${ROWS}${GOOGLE_API_KEY}`
        );
        const jsonData = await response.json();
        const filteredData = jsonData.values.map((row: any) =>
          row.filter((cell: any) => cell !== "")
        );
        setAllTopic(filteredData);
      } catch (error) {
        setError("error: " + error);
        console.log("An error occurred:", error);
      }
    };
    fetchData();
  });

  if (allTopic.length == 0) {
    return (
      <div>
        <span>{error}</span>
      </div>
    );
  }

  return <AgeGroup allTopic={allTopic} />;
};

Practice.getLayout = Layout;
export default Practice;

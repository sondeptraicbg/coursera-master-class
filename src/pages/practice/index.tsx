import Layout from "components/layout";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "./_.module.scss";
import { GOOGLE_API_KEY, GOOGLE_API_PRE, ROWS } from "constants/googleapi";
import useSWR from "swr";

type age = {
  id: number;
  name: string;
  background: string;
};

const ages: age[] = [
  {
    id: 4,
    name: "WED",
    background: "/imgs/age4/4.1.jpg",
  },
  {
    id: 5,
    name: "ENW",
    background: "/imgs/age5/5.1.jpg",
  },
  {
    id: 6,
    name: "NWC",
    background: "/imgs/age6/6.1.jpg",
  },
  {
    id: 7,
    name: "SSL",
    background: "/imgs/age7/7.1.jpg",
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
        <span>Danh sách các môn học</span>
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
  const RANGE_SHEET = "basic!B4:K12";

  const fetcher = async (url: any) => {
    const res = await fetch(url);

    if (!res.ok) {
      const error = new Error("an error occurred while fetching the data");
      error.message = res.statusText;
      throw error;
    }

    const jsonData = await res.json();
    const filteredData = jsonData.values.map((row: any) =>
      row.filter((cell: any) => cell !== "")
    );

    return filteredData;
  };

  const { data, error } = useSWR(
    `${GOOGLE_API_PRE}${RANGE_SHEET}${ROWS}${GOOGLE_API_KEY}`,
    fetcher,
    {
      revalidateOnMount: true,
    }
  );

  if (error) {
    return (
      <div>
        <span>{error}</span>
      </div>
    );
  }

  return <AgeGroup allTopic={data} />;
};

Practice.getLayout = Layout;
export default Practice;

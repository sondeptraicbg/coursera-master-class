import React, { useEffect, useState } from "react";
import Dialogue from "./subtitleComponent";
import styles from "./_.module.scss";
import Operations from "./AudioOperations";
import { useRouter } from "next/router";
import { Ranges } from "../../../constants/ListListeningLessons";
import ListNewWord from "./newWords";

const ListeningComponent = () => {
  const [topic, setTopic] = useState<string>();
  const [newWords, setNewWords] = useState<any[]>([]);
  const [dialogue, setDialogue] = useState<any[]>([[], [], []]);
  const router = useRouter();
  const { index } = router.query;
  const age = index ? String(index[0]) : null;
  const id = index ? Number(index[1]) : 0;

  useEffect(() => {
    if (!age || !id) {
      return;
    }

    const fetchData = async () => {
      try {
        console.log(id);
        const response = await fetch(
          `https://sheets.googleapis.com/v4/spreadsheets/11l2MvPp3h7MiFaf5svxGQFe84U8u-hmLNJPP-euziCg/values/basic!${Ranges[age][id]}?majorDimension=COLUMNS&key=AIzaSyBEC-5QDF7ocl-iJpC_vyXJjKyCdlR39i0`
        );
        const jsonData = await response.json();
        const filteredData = jsonData.values.map((row: any) =>
          row.filter((cell: any) => cell !== "")
        );
        setTopic(filteredData[1]);
        setNewWords(filteredData[2].toString().split(","));
        //first is English dialog, second is audio file, third is Vietnamese
        setDialogue([filteredData[4], filteredData[6], filteredData[7]]);
      } catch (error) {
        console.log("An error occurred:", error);
      }
    };

    fetchData();
  }, [age, id]);

  return (
    <>
      <div className={styles.layout}>
        <div className={styles.title}>
          <span>{`Topic: ${
            topic ? topic : "No content"
          } - lứa tuổi ${age?.substring(3)}`}</span>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.imageDisplay}>
            <img src={"/bg_temp.jpg"} alt="dailyroutin" />
          </div>
          <Dialogue dialogue={dialogue}></Dialogue>
        </div>

        <div>
          <ListNewWord words={newWords}></ListNewWord>
        </div>
      </div>
    </>
  );
};

export default ListeningComponent;

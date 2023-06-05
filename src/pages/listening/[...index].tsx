import React, { useEffect, useState } from "react";
import Dialogue from "./subtitleComponent";
import styles from "./_.module.scss";
import Operations from "./AudioOperations";
import { useRouter } from "next/router";
import { Ranges } from "../constant/ListListeningLessons";
import ListNewWord from "./newWords";

const ListeningComponent = () => {
  const [dialogueEngligh, setDialogueEnglish] = useState<any[]>([]);
  const [dialogueVietnamese, setDialogueVietnamese] = useState<any[]>([]);
  const [topic, setTopic] = useState<String>();
  const [newWords, setNewWords] = useState<any[]>([]);
  const [startTime, setStartTime] = useState<any[]>([]);
  const [endTime, setEndTime] = useState<any[]>([]);
  const [showDialogue, setShowDialogue] = useState(false);

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
        const response = await fetch(
          `https://sheets.googleapis.com/v4/spreadsheets/11l2MvPp3h7MiFaf5svxGQFe84U8u-hmLNJPP-euziCg/values/basic!${
            Ranges[age][id + 1]
          }?majorDimension=COLUMNS&key=AIzaSyBEC-5QDF7ocl-iJpC_vyXJjKyCdlR39i0`
        );
        const jsonData = await response.json();
        const filteredData = jsonData.values.map((row: any) =>
          row.filter((cell: any) => cell !== "")
        );
        setTopic(filteredData[1]);
        setNewWords(filteredData[2].toString().split(","));
        setDialogueEnglish(filteredData[4]);
        setDialogueVietnamese(filteredData[7]);
        setStartTime(filteredData[8]);
        setEndTime(filteredData[9]);
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
          <span>{`Topic: ${topic} - lứa tuổi ${age?.substring(3)}`}</span>
        </div>
        <div className={styles.wrapper}>
          <div>
            <div className={styles.imageDisplay}>
              <img src={"/bg_temp.jpg"} alt="dailyroutin" />
            </div>
          </div>
          <Operations
            prevDia={dialogueEngligh}
            startTime={startTime}
            endTime={endTime}
          />
        </div>

        <Dialogue
          english={dialogueEngligh}
          vietnamese={dialogueVietnamese}
        ></Dialogue>
        <div>
          <ListNewWord words={newWords}></ListNewWord>
        </div>
      </div>
    </>
  );
};

export default ListeningComponent;

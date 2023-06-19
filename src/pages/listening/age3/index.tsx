import Layout from "components/layout";
import React, { useEffect, useState } from "react";
import styles from "./_.module.scss";

const ListeningPage = () => {
  const [videoUrls, setVideoUrls] = useState("");
  const [newWords, setNewWords] = useState([]);
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const rawData = await fetch(
          `https://sheets.googleapis.com/v4/spreadsheets/11l2MvPp3h7MiFaf5svxGQFe84U8u-hmLNJPP-euziCg/values/basic!B16:G25?majorDimension=COLUMNS&key=AIzaSyBEC-5QDF7ocl-iJpC_vyXJjKyCdlR39i0`
        );
        const jsonData = await rawData.json();
        const filteredData = jsonData.values;
        setTopics(filteredData[0]);
        setNewWords(filteredData[1]);
        setVideoUrls(filteredData[5]);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={styles.layout}>
      <div className={styles.header}>
        <div className={styles.title}>
          <span>{`Lứa tuổi 3`}</span>
        </div>
      </div>

      <VideoOperation
        topics={topics}
        newWords={newWords}
        videoUrls={videoUrls}
      />
    </div>
  );
};

const VideoOperation = ({ topics, newWords, videoUrls }) => {
  const [index, setIndex] = useState(0);

  return (
    <div>
      <div></div>
    </div>
  );
};

ListeningPage.getLayout = Layout;
export default ListeningPage;

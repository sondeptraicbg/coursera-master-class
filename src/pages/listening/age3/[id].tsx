import Layout from "components/layout";
import React, { useEffect, useState } from "react";
import styles from "./_.module.scss";
import YouTube from "react-youtube";
import { useRouter } from "next/router";
import { GOOGLE_API_KEY, GOOGLE_API_PRE, COLUMNS } from "constants/googleapi";

const ListeningPage = () => {
  const [videoUrls, setVideoUrls] = useState([]);
  const [newWords, setNewWords] = useState([]);
  const [topics, setTopics] = useState([]);
  const router = useRouter();
  const { id } = router.query;
  const idNum = id ? Number(id) : null;
  const RANGE_SHEET = "basic!B16:G25";

  useEffect(() => {
    if (!idNum || !id) {
      return;
    }

    const fetchData = async () => {
      try {
        const rawData = await fetch(
          `${GOOGLE_API_PRE}${RANGE_SHEET}${COLUMNS}${GOOGLE_API_KEY}`
        );
        const jsonData = await rawData.json();
        const filteredData = await jsonData.values;
        setTopics(filteredData[0]);
        setNewWords(filteredData[1]);
        setVideoUrls(filteredData[5]);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, [idNum, id]);

  if (!id || !idNum || videoUrls.length == 0) {
    return (
      <div>
        <span>Can not read data</span>
      </div>
    );
  }

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
        id={idNum}
      />
    </div>
  );
};

const VideoOperation = ({ topics, newWords, videoUrls, id }) => {
  const [topic, setTopic] = useState("");
  const [words, setWords] = useState([]);
  const [videoUrl, setVideoUrl] = useState("");
  const [indexTopic, setIndexTopic] = useState(id);
  const router = useRouter();

  useEffect(() => {
    if (!indexTopic) {
      return;
    }

    const getDataViaId = async () => {
      try {
        setTopic(topics[indexTopic - 1]);
        setWords(newWords[indexTopic - 1].split(","));
        setVideoUrl(videoUrls[indexTopic - 1].substring(32));
      } catch (error) {
        console.log("error:", error);
      }
    };
    getDataViaId();
  }, [videoUrls, indexTopic]);

  if (topics.length == 0 || !newWords || !videoUrls || !id) {
    return (
      <div>
        <span>Can not read data</span>
      </div>
    );
  }

  const moveOnPage = (link: string) => {
    router.push(link);
  };

  const handleSwitchTopic = (value) => {
    if (value === indexTopic) {
      return;
    }
    setIndexTopic(value + 1);
  };

  return (
    <>
      {/* YOUTUBE VIDEO */}
      <div className={styles.videoOperation}>
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
            <span>Ôn tập từ vựng</span>
          </div>
        </div>

        <div className={styles.video}>
          <div>
            <YouTube
              key={videoUrl}
              videoId={videoUrl}
              iframeClassName={styles.youtubeVideo}
              // loading="lazy"
            />
          </div>
          <div
            style={{ fontSize: "150%", fontWeight: "bold" }}
          >{`Topic: ${topic}`}</div>
        </div>

        {/* SIDE BAR */}
        <div className={styles.otherTopics}>
          <div style={{ borderBottom: "1px solid black" }}>
            <span>Các chủ đề trong cùng lứa tuổi</span>
          </div>
          {topics.map((topic, index) =>
            index + 1 === indexTopic ? (
              <button
                style={{ backgroundColor: "#e3eaea" }}
                className={styles.topic}
                key={topic}
                onClick={() => {
                  handleSwitchTopic(index);
                }}
              >
                <span>{topic}</span>
              </button>
            ) : (
              <button
                className={styles.topic}
                key={topic}
                onClick={() => {
                  handleSwitchTopic(index);
                }}
              >
                <span>{topic}</span>
              </button>
            )
          )}
        </div>
      </div>
      <hr />
      <h2 id={styles.titleNewWord}>New Words</h2>

      <div className={styles.newWords}>
        {words.map((word, index) => (
          <button key={word}>{word}</button>
        ))}
      </div>
    </>
  );
};

ListeningPage.getLayout = Layout;
export default ListeningPage;

import { useRef, useState } from "react";
import styles from "./_.module.scss";
import { idText } from "typescript";
import { setEngine } from "crypto";

const Operations = ({ english, audio, vietnamese }: any) => {
  const [showSubtitle, setShowSubtitle] = useState(false);

  const handleShowSubtitle = () => {
    setShowSubtitle(!showSubtitle);
  };

  return (
    <>
      <div className={styles.audio}>
        <span> Ấn vào từng đoạn hội thoại để nghe audio</span>
        <audio controls>
          <source src={"/audio/testAudio.mp3"} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>

        <div>
          <button className={styles.showSub} onClick={handleShowSubtitle}>
            {showSubtitle ? "Ẩn subtitle" : "Hiện subtitle"}
          </button>
        </div>

        <div>
          {showSubtitle && (
            <span>
              {english} <br />{" "}
              <span style={{ color: "#a07d7d" }}>{vietnamese}</span>
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default Operations;

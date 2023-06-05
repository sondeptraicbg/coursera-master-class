import { useRef, useState } from "react";
import styles from "./_.module.scss";
import { idText } from "typescript";

const Operations = ({ prevDia, startTime, endTime }: any) => {
  const audioRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [showSubtitle, setShowSubtitle] = useState(false);

  const handleTimeUpdate = () => {
    const audioElement = audioRef.current;
    if (audioElement) {
      setCurrentTime(audioElement.currentTime);
    }
  };

  const handleShowSubtitle = () => {
    setShowSubtitle(!showSubtitle);
  };

  const getCurrentSubtitle = () => {
    const currentDialogue = prevDia.find(
      (dialogue, index) =>
        Math.floor(currentTime) >= Number(startTime[index]) &&
        Math.floor(currentTime) <= Number(endTime[index])
    );

    return currentDialogue ? currentDialogue : "";
  };

  return (
    <>
      <div className={styles.audio}>
        <span>Play this audio to start listening</span>
        <audio controls ref={audioRef} onTimeUpdate={handleTimeUpdate}>
          <source src={"/audio/testAudio.mp3"} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>

        <div>
          <button className={styles.showSub} onClick={handleShowSubtitle}>
            {showSubtitle ? "Hide subtitle" : "Show subtitle"}
          </button>
        </div>

        <div>{showSubtitle && <span>{getCurrentSubtitle()}</span>}</div>
      </div>
    </>
  );
};

export default Operations;

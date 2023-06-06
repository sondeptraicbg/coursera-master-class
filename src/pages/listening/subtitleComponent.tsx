import { useState } from "react";
import styles from "./_.module.scss";
import AudioOperation from "./AudioOperations";
import { idText } from "typescript";

type data = {
  english: string;
  vietnamese: string;
};

const Dialogue = ({ dialogue }: any) => {
  const [showDialogue, setShowDialogue] = useState(false);

  const [english, setEnglish] = useState("");
  const [audio, setAudio] = useState("");
  const [vietnamese, setVietnamese] = useState("");

  if (!dialogue) {
    return (
      <div>
        <h1>error</h1>
      </div>
    );
  }

  const englishDialogue = dialogue[0];
  const allAudio = dialogue[1];
  const vietnameseDialogue = dialogue[2];

  const handleShowDialog = () => {
    setShowDialogue(!showDialogue);
  };

  return (
    <>
      <AudioOperation
        english={english}
        audio={audio}
        vietnamese={vietnamese}
      ></AudioOperation>
      <div className={styles.dialogue}>
        <div className={styles.showDialog}>
          <button onClick={handleShowDialog}>Lời thoại</button>
        </div>
        {showDialogue && (
          <div className={styles.list}>
            {englishDialogue.map((eng, index) => (
              <button
                onClick={() => {
                  setEnglish(eng);
                  setVietnamese(vietnameseDialogue[index]);
                }}
                key={eng}
                className={styles.borderBottom}
              >
                <span>{eng}</span>
                <span id={styles.vietnamse}>
                  {" "}
                  <br /> {vietnameseDialogue[index]}
                </span>
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Dialogue;

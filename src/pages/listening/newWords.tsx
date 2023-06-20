import { useState } from "react";
import styles from "./_.module.scss";

const ListNewWord = ({ words }: any) => {
  const [wordIndex, setWordIndex] = useState(-1);
  if (!words) {
    return (
      <div>
        <h1>Error</h1>
      </div>
    );
  }

  const handleClick = (index) => {
    if (index == wordIndex) {
      setWordIndex(-1);
    } else {
      setWordIndex(index);
    }
  };

  return (
    <>
      <h2 id={styles.titleNewWord}>New Words</h2>

      <div className={styles.newWords}>
        {words.map((word, index) => (
          <button onClick={() => handleClick(index)} key={word}>
            {wordIndex === index && (
              <div className={styles.translation}>
                <h2>hello</h2>
              </div>
            )}
            {word}
          </button>
        ))}
      </div>
    </>
  );
};

export default ListNewWord;

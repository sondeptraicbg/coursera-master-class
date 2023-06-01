import styles from "./_.module.scss";

const ListNewWord = ({ words }: any) => {
  return (
    <>
      <h2 id={styles.titleNewWord}>New Words</h2>
      <div className={styles.newWords}>
        {words.map((word) => (
          <span>{word}</span>
        ))}
      </div>
    </>
  );
};

export default ListNewWord;

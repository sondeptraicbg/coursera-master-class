import styles from "./_.module.scss";

type data = {
  english: string;
  vietnamese: string;
};

const ListElement = ({ data }: { data: data }) => {
  return (
    <div id={styles.column} className={styles.borderBottom}>
      <span>{data.english}</span>
      <span id={styles.vietnamse}>{data.vietnamese}</span>
    </div>
  );
};

const Dialogue = ({ english, vietnamese }: any) => {
  const convertedData: Array<data> = [];
  for (let index = 0; index < english.length; index++) {
    const tempData = {
      english: english[index],
      vietnamese: vietnamese[index],
    };
    convertedData.push(tempData);
  }

  return (
    <div className={styles.list}>
      {convertedData.map((eachData: data) => {
        return <ListElement data={eachData} />;
      })}
    </div>
  );
};

export default Dialogue;

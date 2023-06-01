import styles from "./_.module.scss";

const Operations = () => {
  return (
    <div className={styles.audio}>
      <span>Play this audio to start listening</span>
      <audio controls>
        <source src={"/audio/testAudio.mp3"} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default Operations;

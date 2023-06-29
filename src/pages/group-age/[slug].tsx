import { useRouter } from "next/router";
import { useRef } from "react";
import Layout from "components/layout";
import Head from "next/head";
import styles from "./_.module.scss";
import { GOOGLE_API_KEY, GOOGLE_API_PRE, COLUMNS } from "constants/googleapi";
import useSWR from "swr";
const ranges = {
  age3: "basic!B16:D25",
  age4: "basic!B30:D138",
  age5: "basic!B140:D234",
  age6: "basic!B236:D332",
  age7: "basic!B334:D440",
  age8: "basic!B442:D532",
  age9: "basic!B534:D638",
  age10: "basic!B640:D737",
  age11: "basic!B739:D835",
  age12: "basic!B837:D942",
};

const ListeningExercise = () => {
  const ageGroup = useRef([]);
  const mnemonics = useRef([]);
  const router = useRouter();
  const { slug } = router.query;
  const id = slug ? String(slug) : null;

  const fetcher = async (url: any) => {
    const res = await fetch(url);

    if (!res.ok) {
      const error = new Error("an error occurred while fetching the data");
      error.message = res.statusText;
      throw error;
    }

    const jsonData = await res.json();
    const filteredData = jsonData.values.map((row: any) =>
      row.filter((cell: any) => cell !== "")
    );

    return filteredData;
  };

  const { data, error } = useSWR(
    id ? `${GOOGLE_API_PRE}${ranges[id]}${COLUMNS}${GOOGLE_API_KEY}` : null,
    fetcher,
    { revalidateOnMount: true }
  );

  if (data) {
    ageGroup.current = data[0];
    mnemonics.current = data[2];
  }

  if (error) {
    return <div>An error occurred: {error}</div>;
  }

  return (
    <div className={styles.main}>
      <Head>
        <title>Listening</title>
      </Head>

      <header className={styles.header}>
        <div>
          <span>Lứa tuổi : </span>
          {id?.substring(3)}
        </div>
      </header>
      {ageGroup.current.map((exercise, index) => (
        <div
          id={styles.item}
          className={styles.a}
          key={exercise}
          onClick={() => {
            router.push(`/listening/${id}/${index + 1}`);
          }}
        >
          <div className={styles.topic}>
            <span className={styles.topicName}>Topic: {exercise}</span>
            <span className={styles.index}>{index + 1}</span>
          </div>
          <hr />
          <div className={styles.content}>
            <p>{mnemonics.current ? mnemonics.current[index] : "no content"}</p>
          </div>
          <div className={styles.bottombuttons}>
            <button className={styles.play}>Let's Listen</button>
          </div>
        </div>
      ))}
    </div>
  );
};

ListeningExercise.getLayout = Layout;
export default ListeningExercise;

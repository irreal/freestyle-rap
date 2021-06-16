import { useEffect, useState } from "react";
import styles from "./RapScreen.module.css";
import useInterval from "../hooks/useInterval";

export default function RapScreen() {
  const [word, setWord] = useState("");
  useInterval(async () => {
    const data = await (await fetch("api/word")).json();
    setWord(data.word);
  }, 2000);

  return (
    <>
      <div className={styles.screen}>{word}</div>
    </>
  );
}

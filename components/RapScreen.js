import { useState } from "react";
import styles from "./RapScreen.module.css";
import useInterval from "../hooks/useInterval";
import Slider from "@material-ui/core/Slider";

function valuetext(value) {
  const textValues = [
    "jedna sekunda",
    "dve sekunde",
    "tri sekunde",
    "četiri sekunde",
    "pet sekundi",
    "šest sekundi",
    "sedam sekundi",
    "osam sekundi",
    "devet sekundi",
    "deset sekundi",
    "jedanaest sekundi",
    "dvanaest sekundi",
  ];
  return textValues[value / 1000 - 1];
}
export default function RapScreen() {
  const [word, setWord] = useState("");
  const [interval, setInterval] = useState(2000);
  useInterval(async () => {
    const data = await (await fetch("api/word")).json();
    setWord(data.word);
  }, interval);

  const handleChange = (event, newValue) => {
    setInterval(newValue * 1000);
  };

  return (
    <>
      <div className={styles.screen}>{word}</div>
      <div className={styles.timeslider}>
        Brzina: {valuetext(interval)}
        <Slider
          defaultValue={2}
          getAriaValueText={valuetext}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="auto"
          step={1}
          marks
          min={2}
          max={12}
          onChange={handleChange}
        />
      </div>
      <iframe
        width="100%"
        height="166"
        scrolling="no"
        frameborder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/43087889&color=ff6600&show_artwork=false&show_comments=false"
      ></iframe>
    </>
  );
}

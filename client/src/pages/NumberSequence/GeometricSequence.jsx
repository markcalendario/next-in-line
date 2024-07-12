import { useState } from "react";
import GenerateButton from "../../components/GenerateButton/GenerateButton.jsx";
import SequenceInput from "../../components/SequenceInput/SequenceInput.jsx";
import styles from "./NumberSequence.module.scss";

export default function GeometricSequenceCompiled() {
  const [output, setOutput] = useState(null);

  const calculate = async () => {
    const num1 = document.getElementById("first").value;
    const num2 = document.getElementById("second").value;
    const num3 = document.getElementById("third").value;

    const server = import.meta.env.VITE_API_URL;
    const url = `${server}/nil`;
    const config = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ num1, num2, num3 })
    };

    const response = await fetch(url, config);
    const result = await response.json();
    console.log(result);
    setOutput(result.result);
  };

  return (
    <section id={styles.numberSequence}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.texts}>
            <h1>Geometric Sequence</h1>
            <p>I'll try to guess the next number in the sequence.</p>
          </div>
          <div className={styles.sequence}>
            <SequenceInput id="first" placeholder="First Value" />
            <SequenceInput id="second" placeholder="Second Value" />
            <SequenceInput id="third" placeholder="Third Value" />
            <SequenceInput
              id="result"
              placeholder="Out"
              value={output}
              disabled
            />
          </div>
          <GenerateButton onClick={calculate}>Calculate</GenerateButton>
        </div>
      </div>
    </section>
  );
}

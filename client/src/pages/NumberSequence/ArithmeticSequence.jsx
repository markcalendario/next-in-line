import GenerateButton from "../../components/GenerateButton/GenerateButton.jsx";
import SequenceInput from "../../components/SequenceInput/SequenceInput.jsx";
import styles from "./NumberSequence.module.scss";

export default function ArithmeticSequenceCompiled() {
  return (
    <section id={styles.numberSequence}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.texts}>
            <h1>Arithmetic Sequence</h1>
            <p>I'll try to guess the next number in the sequence.</p>
          </div>
          <div className={styles.sequence}>
            <SequenceInput placeholder="First Value" />
            <SequenceInput placeholder="Second Value" />
            <SequenceInput placeholder="Third Value" />
            <SequenceInput placeholder="Output" disabled />
          </div>
          <GenerateButton>Calculate</GenerateButton>
        </div>
      </div>
    </section>
  );
}

import LinkButtonCard from "../../components/ButtonCard/LinkButtonCard.jsx";
import styles from "./SequenceSelect.module.scss";

export default function SequenceSelectCompiled() {
  return <Compose />;
}

function Compose() {
  return (
    <section id={styles.compose}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.texts}>
            <h1>Select Number Sequence</h1>
          </div>
          <div className={styles.genres}>
            <LinkButtonCard
              title="Arithmetic"
              image="/assets/illustrations/arithmetic.svg"
              href="/sequence/arithmetic"
            />
            <LinkButtonCard
              title="Geometric"
              image="/assets/illustrations/geometric.svg"
              href="/sequence/geometric"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

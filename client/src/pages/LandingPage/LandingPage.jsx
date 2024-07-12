import LinkButtonCard from "../../components/ButtonCard/LinkButtonCard.jsx";
import styles from "./LandingPage.module.scss";

export default function LandingPageCompiled() {
  return <LandingPage />;
}

function LandingPage() {
  return (
    <section id={styles.landingPage}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.texts}>
            <h1>Next In Line</h1>
            <p>
              Simple Numerical Sequence Analyzer Using Artificial Neural
              Networks
            </p>
          </div>
          <div className={styles.genres}>
            <LinkButtonCard
              title="Start"
              image="/assets/illustrations/arithmetic.svg"
              href="/number-sequence"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

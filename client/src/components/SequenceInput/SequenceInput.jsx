import styles from "./SequenceInput.module.scss";

export default function SequenceInput({
  id,
  className,
  name,
  placeholder,
  disabled,
  value
}) {
  return (
    <div className={styles.sequenceInput}>
      {placeholder && <p className={styles.placeholder}>{placeholder}</p>}
      <input
        id={id}
        className={styles.sequence + (className ? className : "")}
        name={name}
        disabled={disabled}
        defaultValue={value ? value : ""}
      />
    </div>
  );
}

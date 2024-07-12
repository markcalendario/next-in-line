import style from "./GenerateButton.module.scss";

export default function GenerateButton({ id, className, onClick, children }) {
  return (
    <button
      id={id}
      className={style.generateButton + (className ? className : "")}
      onClick={onClick}>
      {children}
    </button>
  );
}

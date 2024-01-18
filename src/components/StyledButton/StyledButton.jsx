// styles
import styles from "./StyledButton.module.scss";

function StyledButton({ handleSubmit, text, validation }) {
  const handleClick = () => {
    handleSubmit();
  };

  return (
    <button
      onClick={handleClick}
      disabled={validation}
      className={`${styles['btn']} ${validation ? styles['disabled'] : ''}`}
    >
      {text}
    </button>
  );
}

export default StyledButton;

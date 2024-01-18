// styles
import { useEffect } from "react";
import styles from "./StyledButton.module.scss";

function StyledButton({ handleSubmit, text, disabled }) {
  const handleClick = () => {
    handleSubmit();
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={`${styles['btn']} ${disabled ? styles['disabled'] : ''}`}
    >
      {text}
    </button>
  );
}

export default StyledButton;

// styles
import styles from "./StyledButton.module.scss";

function StyledButton({ children, disabled, ...attributes }) {
  return (
    <button
      disabled={disabled}
      {...attributes}
      className={`${styles['btn']} ${disabled ? styles['disabled'] : ''}`}
    >
      {children}
    </button>
  );
}

export default StyledButton;

// styles
import styles from "./StyledInput.module.scss";

function StyledInput({ error, ...args }) {

  return (
  <div className={styles['input-wrapper']}>
    <input
      type="text"
      className={styles['number-input']}
      {...args}
    />
    {error && <label className={styles['error-message']}>{error}</label>}
  </div>
  );
}

export default StyledInput;

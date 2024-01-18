// styles
import styles from "./StyledInput.module.scss";

function StyledInput({ handleChangeMeasure, placeholder, value }) {
  const handleChange = (value) => {
    handleChangeMeasure(value);
  };

  return (
  <div className={styles['input-wrapper']}>
    <input
      type="number"
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
      className={styles['number-input']}
    />
  </div>
  );
}

export default StyledInput;

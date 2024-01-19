// styles
import styles from "./Card.module.scss";

function Card({ title, image, handleChange, selected }) {
  const handleClick = () => {
    handleChange(title); // Call the handleChange function passed from Goal.jsx
  };

  return (
  <div onClick={handleClick} className={`${styles['card-wrapper']} ${selected ? styles['selected'] : ''}`}>
    <div className={styles['card-title']}>
      {title}
    </div>
      <img src={image} alt={title} />
  </div>
  );
}

export default Card;

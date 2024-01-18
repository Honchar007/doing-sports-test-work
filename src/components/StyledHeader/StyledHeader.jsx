// styles
import styles from "./StyledHeader.module.scss";

// assets
import leftArrow from '../../assets/left-arrow.svg';
import icon from '../../assets/icon.svg';


function StyledHeader() {
  return (
  <div className={styles['header-wrapper']}>
    <div className={styles['back-wrapper']}>
      <img src={leftArrow} alt="left-arrow" />
    </div>
    <div className={styles['main-link']}>
      <div className={styles['icon']}>
        <img src={icon} alt="icon" />
      </div>
      <h1 className={styles['header-title']}>
        Food Mentor
      </h1>
    </div>
  </div>
  );
}

export default StyledHeader;

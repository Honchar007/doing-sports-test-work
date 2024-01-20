import { useState } from "react";

// styles
import styles from "./PhysicalExercise.module.scss";

// assets
import BodyExercise from '../../assets/body-exercise.svg';

// constants
const exercises = [
  {
    text: 'Hardly at all',
    value: 0,
  },
  {
    text: 'Fitness 1-2 times a week',
    value: 1,
  },
  {
    text: 'Fitness 3-5 times a week',
    value: 2,
  },
  {
    text: 'Fitness 5-7 times a week',
    value: 3,
  },
];

function PhysicalExercise() {
  const [selected, setSelected] = useState(null);

  const handleChange = (value) => {
    setSelected(value);
  };

  return (
  <div className={styles['physical-wrapper']}>
    <div className={styles['physical-info']}>
      <div className={styles['info-title']}>Physical exercise</div>
      <div className={styles['info-description']}>
        Physical exercise means a lot for a woman who 
        wants to lose kilos and works at the office
      </div>
    </div>
    <div className={styles['physical-exercise']}>
      <div className={styles['physical-title']}>
        How active are you during the day?
      </div>
      <div className={styles['physical-main']}>
        <div>
          <img src={BodyExercise} alt='Body' />
        </div>
        <div className={styles['physical-cards']}>
          {exercises && exercises.map((el) =>
            <div
              key={el.value}
              onClick={() => handleChange(el.value)}
              className={`${styles['card']} ${ selected === el.value ? styles['selected'] : ''}`}
            >
              <span className={styles['title']}>{el.text}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
  );
}

export default PhysicalExercise;

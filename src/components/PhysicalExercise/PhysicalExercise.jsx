import { useEffect, useState } from "react";

// store
import { useDispatch, useSelector } from "react-redux";
import { passTrainingTimes, selectExercise } from "../../store/fitnessSlicer";

// components
import AnimationPage from '../AnimationPage/AnimationPage';

// styles
import styles from "./PhysicalExercise.module.scss";

// assets
import BodyExercise from '../../assets/body-exercise.svg';

// constants
const exercises = [
  {
    text: 'Hardly at all',
    value: 'Null training',
  },
  {
    text: 'Fitness 1-2 times a week',
    value: '1-2 times',
  },
  {
    text: 'Fitness 3-5 times a week',
    value: '3-5 times',
  },
  {
    text: 'Fitness 5-7 times a week',
    value: '5-7 times',
  },
];

function PhysicalExercise() {
  const dispatch = useDispatch();
  const oldExercise = useSelector(selectExercise);

  const [selected, setSelected] = useState(null);

  const handleChange = (value) => {
    setSelected(value);
    dispatch(passTrainingTimes(value));
  };

  useEffect(() => {
    setSelected(oldExercise);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
  <AnimationPage>
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
  </AnimationPage>
  );
}

export default PhysicalExercise;

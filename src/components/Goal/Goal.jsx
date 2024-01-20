import { useState } from "react";
import { useNavigate } from "react-router-dom";

// components
import AnimationPage from "../AnimationPage/AnimationPage";
import Card from "../Card/Card";

// styles
import styles from "./Goal.module.scss";

// assets
import loseWeightImage from '../../assets/lose-weight.svg';
import gainMuscleImage from '../../assets/gain-muscle.svg';
import healthyHabits1Image from '../../assets/healthy-habits-1.svg';
import healthyHabits2Image from '../../assets/healthy-habits-2.svg';

// constants
const cards = [
  {
    title: 'Lose Weight',
    image: loseWeightImage,
  },
  {
    title: 'Gain Muscle',
    image: gainMuscleImage,
  },
  {
    title: 'Develop healthy habits',
    image: healthyHabits1Image,
  },
  {
    title: 'Develop healthy habits',
    image: healthyHabits2Image,
  },
];

function Goal() {
  const navigate = useNavigate();
  const [goal, setGoal] = useState('');

  const handleChange = (goal) => {
    setGoal(goal);
    navigate('/weight');
  }

  return (
  <AnimationPage>
    <div className={styles['goal-wrapper']}>
      <div className={styles['goal-title']}>The Goal</div>
      <div className={styles['goal-desc']}>
        Focus on the health benefits you need.
      </div>
      <div className={styles['goal-desc']}>
        Balanced nutrition will let you achieve them
      </div>
      <div className={styles['goal-function']}>
        <div className={styles['goal-subtitle']}>
          What are your goals?
        </div>
        <div className={styles['goal-cards']}>
          {cards && cards.map((el, index) =>
          <Card
            key={index}
            title={el.title}
            image={el.image}
            handleChange={handleChange}
            selected={el.title === goal}
          />)}
        </div>
      </div>
    </div>
  </AnimationPage>
  );
}

export default Goal;

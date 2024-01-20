import { useNavigate } from "react-router-dom";

// store
import { useDispatch, useSelector } from "react-redux";
import { passGoal, selectGoal } from "../../store/fitnessSlicer";

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
    value: 'lose-weight',
    title: 'Lose Weight',
    image: loseWeightImage,
  },
  {
    value: 'gain-muscle',
    title: 'Gain Muscle',
    image: gainMuscleImage,
  },
  {
    value: 'develop-healthy-habits-1',
    title: 'Develop healthy habits',
    image: healthyHabits1Image,
  },
  {
    value: 'develop-healthy-habits-2',
    title: 'Develop healthy habits',
    image: healthyHabits2Image,
  },
];

function Goal() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selectedGoal = useSelector(selectGoal);

  const handleChange = (goal) => {
    dispatch(passGoal(goal));
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
          {cards && cards.map((el) =>
          <Card
            key={el.value}
            title={el.title}
            image={el.image}
            handleChange={() => handleChange(el.value)}
            selected={el.value === selectedGoal}
          />)}
        </div>
      </div>
    </div>
  </AnimationPage>
  );
}

export default Goal;

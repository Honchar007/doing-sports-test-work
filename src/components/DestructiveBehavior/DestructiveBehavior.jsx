import { useState } from "react";
import { useNavigate } from "react-router-dom";

// components
import StyledButton from "../StyledButton/StyledButton";

// styles
import styles from "./DestructiveBehavior.module.scss";

// assets
import ManySalty from '../../assets/destructives/many-salty.svg';
import MidnightSnacks from '../../assets/destructives/midnight-snacks.svg';
import MuchSoda from '../../assets/destructives/much-soda.svg';
import NoSleep from '../../assets/destructives/no-sleep.svg';
import NoneOfAbove from '../../assets/destructives/none.svg';
import SweetTooth from '../../assets/destructives/sweet-tooth.svg';

// constants
const destructives = [
  {
    title: 'I don\'t rest enough',
    image: NoSleep,
  },
  {
    title: 'I have a sweet tooth',
    image: SweetTooth,
  },
  {
    title: 'I have too much soda',
    image: MuchSoda,
  },
  {
    title: 'I eat many salty foods',
    image: ManySalty,
  },
  {
    title: 'I enjoy midnight snacks',
    image: MidnightSnacks,
  },
  {
    title: 'None of the above',
    image: NoneOfAbove,
  },
];

function DestructiveBehavior() {
  const navigate = useNavigate();

  const [selectedDestructives, setSelectedDestructives] = useState([]);

  const toggleSelection = (title) => {
    if (selectedDestructives.includes(title)) {
      setSelectedDestructives(selectedDestructives.filter((item) => item !== title));
    } else {
      setSelectedDestructives([...selectedDestructives, title]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/physical-exercise');
  }

  return (
  <div className={styles['destructive-wrapper']}>
    <div className={styles['destructive-info']}>
      <div className={styles['info-title']}>Destructive behaviors</div>
      <div className={styles['info-description']}>We all have them! Which are yours?</div>
    </div>
    <div className={styles['destructive-cards']}>
      { destructives && destructives.map((el) =>
        <div
          key={el.title}
          onClick={() => toggleSelection(el.title)}
          className={`${styles['card-wrapper']} ${selectedDestructives.includes(el.title) ? styles['selected'] : ''}`}
        >
          <div>
            <img src={el.image} alt={el.title} />
          </div>
          <div className={styles['card-title']}>
            {el.title}
          </div>
        </div>
      )}
    </div>
    <StyledButton
      type='submit'
      onClick={handleSubmit}
      disabled={selectedDestructives.length === 0}
    >
      Continue
    </StyledButton>
  </div>
  );
}

export default DestructiveBehavior;

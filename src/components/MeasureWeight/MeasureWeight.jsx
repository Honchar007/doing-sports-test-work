import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

// styles
import styles from "./MeasureWeight.module.scss";

function MeasureWeight() {
  const [measure, setMeasure] = useState('Imperial');

  const navigate = useNavigate();

  const handleChangeMeasure = (value) => {
    setMeasure(value);
  };

  const handleClick = () => {
  };

  return (
  <div className={styles['weight-wrapper']}>
    <div className={styles['weight-choice']}>
      <div
        onClick={() => handleChangeMeasure('Imperial')}
        className={`${styles['choice']} ${measure === 'Imperial' ? styles['selected'] : ''}`}
      >
        Imperial
      </div>
      <div
        onClick={() => handleChangeMeasure('Metric')}
        className={`${styles['choice']} ${measure === 'Metric' ? styles['selected'] : ''}`}
      >
        Metric
      </div>
    </div>
    <div>
    </div>
  </div>
);
}

export default MeasureWeight;

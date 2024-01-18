import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

// components
import StyledInput from '../StyledInput/StyledInput';
import StyledButton from '../StyledButton/StyledButton';

// styles
import styles from "./MeasureWeight.module.scss";

function MeasureWeight() {
  const navigate = useNavigate();

  const [measure, setMeasure] = useState('Imperial');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [validation, setValidation] = useState(true);

  const handleChangeMeasure = (value) => {
    setMeasure(value);
  };

  const handleChangeHeight = (e) => {
    setHeight(e.target.value);
  };

  const handleChangeWeight = (e) => {
    setWeight(e.target.value);
  };

  const handleClick = () => {
    navigate('/destructive-behavior');
  };
/*&&
        parseFloat(weight) > 0 &&
        parseFloat(height) > 0 */
  useEffect(() => {
    if (height &&
        weight &&
        parseFloat(weight) > 0 &&
        parseFloat(height) > 0) {
      setValidation(false);
    } else {
      setValidation(true);
    }
  }, [height, weight]);


  return (
  <div className={styles['measure-wrapper']}>
    <div className={styles['measure-choice']}>
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
    <div className={styles['inputs-wrapper']}>
      <StyledInput
        placeholder={measure === 'Imperial' ? 'Height(ft)' : 'Height(m)'}
        handleChangeMeasure={handleChangeHeight}
        value={height}
      />
      <StyledInput
        placeholder={measure === 'Imperial' ? 'Weight(ft)' : 'Weight(m)'}
        handleChangeMeasure={handleChangeWeight}
        value={weight}
      />
    </div>
    <div className={styles['measure-info']}>
      <div className={styles['info-title']}>Measure Yourself</div>
      <div className={styles['info-description']}>What are your height and body weight?</div>
    </div>
    <StyledButton
      handleSubmit={handleClick}
      text='Continue'
      disabled={validation}
    />
  </div>
);
}

export default MeasureWeight;

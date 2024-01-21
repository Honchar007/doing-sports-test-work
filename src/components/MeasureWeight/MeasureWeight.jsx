import { useEffect } from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

// store
import { useDispatch, useSelector } from 'react-redux';
import { passMeasures, selectMeasures } from '../../store/fitnessSlicer';

// components
import AnimationPage from '../AnimationPage/AnimationPage';
import StyledInput from '../StyledInput/StyledInput';
import StyledButton from '../StyledButton/StyledButton';

// styles
import styles from "./MeasureWeight.module.scss";

const validationSchema = Yup.object().shape({
  height: Yup.number().typeError('Height must be a number').positive('Height must be a positive number').required('Height is required'),
  weight: Yup.number().typeError('Weight must be a number').positive('Weight must be a positive number').required('Weight is required'),
});

function MeasureWeight() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const measures = useSelector(selectMeasures);

  const formik = useFormik({
    initialValues: {
      measure: 'Imperial',
      height: measures && measures.height ? measures.height + '' : '',
      weight: measures && measures.weight ? measures.weight + '' : '',
    },
    validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true);
      dispatch(passMeasures(values));
      navigate('/destructive-behavior');
    },
  });

  const handleChangeMeasure = (value) => {
    formik.setFieldValue('measure', value);
  };

  useEffect(() => {
    if (measures && measures.height > 0 && measures.weight > 0) {
      handleChangeMeasure(measures.measurementType);
      formik.setFieldValue('height', measures.height);
      formik.setFieldValue('weight', measures.weight);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AnimationPage>
      <form onSubmit={formik.handleSubmit}>
        <div className={styles['measure-wrapper']}>
          <div className={styles['measure-choice']}>
            <div
              onClick={() => handleChangeMeasure('Imperial')}
              className={`${styles['choice']} ${formik.values.measure === 'Imperial' ? styles['selected'] : ''}`}
            >
              Imperial
            </div>
            <div
              onClick={() => handleChangeMeasure('Metric')}
              className={`${styles['choice']} ${formik.values.measure === 'Metric' ? styles['selected'] : ''}`}
            >
              Metric
            </div>
          </div>
          <div className={styles['inputs-wrapper']}>
            <StyledInput
              placeholder={formik.values.measure === 'Imperial' ? 'Height(ft)' : 'Height(m)'}
              onChange={(e) => formik.handleChange(e)}
              onBlur={formik.handleBlur}
              value={formik.values.height}
              error={formik.touched.height && formik.errors.height}
              name="height"
            />
            <StyledInput
              placeholder={formik.values.measure === 'Imperial' ? 'Weight(ft)' : 'Weight(m)'}
              onChange={(e) => formik.handleChange(e)}
              onBlur={formik.handleBlur}
              value={formik.values.weight}
              error={formik.touched.weight && formik.errors.weight}
              name="weight"
            />
          </div>
          <div className={styles['measure-info']}>
            <div className={styles['info-title']}>Measure Yourself</div>
            <div className={styles['info-description']}>What are your height and body weight?</div>
          </div>
          <StyledButton type="submit" disabled={!formik.dirty || !formik.isValid}>
            Continue
          </StyledButton>
        </div>
      </form>
    </AnimationPage>
  );
}

export default MeasureWeight;

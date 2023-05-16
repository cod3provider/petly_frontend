import { Formik, Field, Form } from 'formik';
import PropTypes from 'prop-types';

const FirsStepForm = ({ setStep, setState }) => {
  const handleBack = () => {
    setState({ type: 'your pet' });
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={values => {
        setStep('second');
        setState(prev => ({
          ...prev,
          type: values.picked,
        }));
      }}
    >
      {({ values }) => (
        <Form>
          <div id="my-radio-group"></div>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field
                styled="none"
                type="radio"
                name="picked"
                value="your pet"
                required
              />
              your pet
            </label>
            <label>
              <Field styled="none" type="radio" name="picked" value="sell" />
              sell
            </label>
            <label>
              <Field
                styled="none"
                type="radio"
                name="picked"
                value="lost/found"
                required
              />
              lost/found
            </label>
            <label>
              <Field
                styled="none"
                type="radio"
                name="picked"
                value="in good hands"
                required
              />
              in good hands
            </label>
            <div> Picked: {values.picked}</div>
          </div>

          <button type="button" onClick={handleBack}>
            back
          </button>
          <button type="submit">Next step</button>
        </Form>
      )}
    </Formik>
  );
};

export default FirsStepForm;

FirsStepForm.propTypes = {
  setStep: PropTypes.func.isRequired,
  setState: PropTypes.func.isRequired,
};

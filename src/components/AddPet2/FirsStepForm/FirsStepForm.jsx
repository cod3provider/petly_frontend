import { Formik, Field, Form } from 'formik';

const FirsStepForm = ({ setStep, setState }) => {
  const handleBack = () => {
    console.log('go back');
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={values => {
        setStep('second');
        setState(prev => ({ ...prev, type: values.picked }));
      }}
    >
      {({ values }) => (
        <Form>
          <div id="my-radio-group">Picked</div>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" name="picked" value="your pet" />
              your pet
            </label>
            <label>
              <Field type="radio" name="picked" value="sell" />
              sell
            </label>
            <label>
              <Field type="radio" name="picked" value="lost/found" />
              lost/found
            </label>
            <label>
              <Field type="radio" name="picked" value="in good hands" />
              in good hands
            </label>
            <div>Picked: {values.picked}</div>
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

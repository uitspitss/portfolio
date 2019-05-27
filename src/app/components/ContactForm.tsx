import React, { FC } from 'react';
import axios from 'axios';
import { withFormik, InjectedFormikProps } from 'formik';
import * as Yup from 'yup';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

interface FormStatus {
  success: boolean;
}

interface FormValues {
  email: string;
  text: string;
}

const submit = (values) => {
  axios.post('/api/contact', values).then(res => {
    return res.status === 200;
  });
};

const ContactFrom: FC<InjectedFormikProps<FormStatus, FormValues>> = ({
  values,
  isSubmitting,
  isValid,
  handleSubmit,
  handleChange,
}) => (
  <React.Fragment>
    <form onSubmit={handleSubmit}>
      <Grid container direction="row" justify="center">
        <Grid item xs={9} style={{ margin: 10}}>
          <TextField
            name="email"
            value={values.email}
            onChange={handleChange}
            label="Email"
            placeholder="inpt your email!"
            style={{width: '100%'}}
          />
        </Grid>
        <Grid item xs={9} style={{ margin: 10}}>
          <TextField
            name="text"
            value={values.text}
            onChange={handleChange}
            label="Text"
            placeholder="inpt your text!"
            multiline
            rows="5"
            style={{width: '100%'}}
          />
        </Grid>
        <Grid item xs={9} style={{ margin: 10}}>
          <Button
            type="submit"
            variant="contained"
            disabled={!isValid || isSubmitting}
            color="primary"
          >
            {isSubmitting ? 'sending...' : 'send'}
          </Button>
        </Grid>
      </Grid>
    </form>
    <style jsx>
      {`
        :global(.floating-paper) {
          width: 60vw;
          padding: 20px 50px;
          background: rgba(255, 255, 255, 0.9);
        }
      `}
    </style>
  </React.Fragment>
);

export default withFormik({
  mapPropsToValues: () => ({ email: '', text: '' }),
  // mapPropsToStatus: () => ({ success: false }),
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .required('Required')
      .email(),
    text: Yup.string().required('Required'),
  }),
  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      submit(values);
      setSubmitting(false);
    }, 1000);
  },
})(ContactFrom);

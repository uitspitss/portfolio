import React, { FC } from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

interface FormValues {
  email: string;
  text: string;
}

const submit = (values: FormValues) => {
  axios.post('/api/contact', values).then(res => {
    return res.status === 200;
  });
};

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required('Required')
    .email(),
  text: Yup.string().required('Required'),
});

const ContactFrom: FC = () => {
  const values = { email: '', text: '' };

  const onSubmit = (values: FormValues) => {
    setTimeout(() => {
      submit(values);
    }, 1000);
  };

  const {
    getFieldProps,
    handleChange,
    handleSubmit,
    isValid,
    isSubmitting,
  } = useFormik({
    initialValues: values,
    validationSchema,
    onSubmit,
  });

  const [email, metadataEmail] = getFieldProps('email', 'text');
  const [text, metadataText] = getFieldProps('text', 'text');

  return (
    <form onSubmit={handleSubmit}>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={9} style={{ margin: 10 }}>
          <TextField
            name="email"
            label="Email"
            value={email.value}
            onChange={handleChange}
            helperText={metadataEmail.error}
            placeholder="inpt your email!"
            style={{ width: '100%' }}
          />
        </Grid>
        <Grid item xs={9} style={{ margin: 10 }}>
          <TextField
            name="text"
            label="Text"
            value={text.value}
            onChange={handleChange}
            helperText={metadataText.error}
            placeholder="inpt your text!"
            multiline
            rows="5"
            style={{ width: '100%' }}
          />
        </Grid>
        <Grid item xs={9} style={{ margin: 10 }}>
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
  );
};

export default ContactFrom;

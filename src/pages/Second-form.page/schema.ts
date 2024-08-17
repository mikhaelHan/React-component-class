import * as yup from 'yup';

const regExpEmail = new RegExp(/^\S+@\S+\.\S+$/);

export const schema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required('This field is required')
    .matches(
      /^[А-ЯA-Z][а-яА-Яa-zA-Z]*$/,
      'Name must start with an uppercase letter',
    ),
  age: yup
    .number()
    .required('This field is required')
    .positive('Age must be a positive number')
    .integer('Age must be an integer')
    .typeError('This field is required'),
  email: yup
    .string()
    .required('This field is required')
    .matches(regExpEmail, 'Invalid mail format'),
  password: yup
    .string()
    .required('This field is required')
    .matches(/[a-z]+/, 'Password must contain at least one lowercase letter')
    .matches(/[A-Z]+/, 'Password must contain at least one uppercase letter')
    .matches(/[0-9]+/, 'Password must contain at least one digit')
    .matches(
      /[@#$%&]+/,
      'Password must contain at least one special character (@, #, $, %, &)',
    ),
  confirmPassword: yup
    .string()
    .required('This field is required')
    .oneOf([yup.ref('password')], 'Passwords must match'),
  gender: yup.string().required('This field is required'),
  condition: yup
    .boolean()
    .required('You must agree to the Terms and Conditions')
    .oneOf([true], 'You must agree to the Terms and Conditions'),
});

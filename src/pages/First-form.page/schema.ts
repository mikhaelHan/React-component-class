import * as yup from 'yup';
import { IDownloadFile } from '../../models/form.model';

const regExpEmail = new RegExp(/^\S+@\S+\.\S+$/);

export const schema = yup.object({
  name: yup
    .string()
    .trim()
    .required('Field Name is required')
    .matches(
      /^[А-ЯA-Z][а-яА-Яa-zA-Z]*$/,
      'Name must start with an uppercase letter',
    ),
  age: yup
    .number()
    .required('Field Age is required')
    .positive('Age must be a positive number')
    .integer('Age must be an integer')
    .typeError('Field Age is required'),
  email: yup
    .string()
    .required('Field Email is required')
    .matches(regExpEmail, 'Invalid Email format'),
  password: yup
    .string()
    .required('Field password is required')
    .matches(/[a-z]+/, 'Password must contain at least one lowercase letter')
    .matches(/[A-Z]+/, 'Password must contain at least one uppercase letter')
    .matches(/[0-9]+/, 'Password must contain at least one digit')
    .matches(
      /[@#$%&]+/,
      'Password must contain at least one special character (@, #, $, %, &)',
    ),
  confirmPassword: yup
    .string()
    .required('Field confirm password is required')
    .oneOf([yup.ref('password')], 'Passwords must match'),
  gender: yup.string().required('Field gender is required'),
  condition: yup
    .boolean()
    .required('You must agree to the Terms and Conditions')
    .oneOf([true], 'You must agree to the Terms and Conditions'),
  image: yup
    .mixed<IDownloadFile>()
    .required('Please select a image')
    .test(
      'fileType',
      'Unsupported file format (allowed jpeg or png)',
      (file) => {
        return (
          file &&
          file[0] &&
          /(png|jpeg)$/.test(file[0].type.split('/').reverse()[0])
        );
      },
    )
    .test('fileSize', 'File size must be less 1MB', (file) => {
      return file && file[0] && file[0].size <= 1024000;
    }),
  country: yup.string().required('Field Country is required'),
});

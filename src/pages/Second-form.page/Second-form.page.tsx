import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import img from '../../assets/images/cross.png';
import { schema } from './schema';

import { IRideForm } from '../../models/form.model';
import PaswordComplexity from './paswordComplexity';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { addForm } from '../../redux/counterSlice';

const SecondFormPage = () => {
  const [state, setState] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/second-form') {
      setState(true);
    }
  }, [state]);

  const countrySelector = useAppSelector((state) => state.forms.countries);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    register,
    getValues,
    formState: { errors },
    control,
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: IRideForm) => {
    const file = data.image[0] as unknown as Blob;
    const reader = new FileReader();
    let base64Data: string | ArrayBuffer | null = null;

    if (file !== undefined) {
      reader.onload = function (e: ProgressEvent<FileReader>) {
        base64Data = e.target ? e.target.result : null;
        dispatch(addForm({ ...data, image: base64Data }));
      };

      reader.readAsDataURL(file);

      reset();
      navigate('/');
    }
  };

  return (
    <div className="wrapper">
      <div className={`form-container ${state ? 'active' : ''}`}>
        <div className="form-container__wrapper">
          <Link className="form-container__close" to={'/'}>
            <img src={img} alt="cross" />
          </Link>
          <h2 className="form-container__title">React Hook Form !</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="form">
            <div className="form__input-box">
              <label className="form__input-label">Name</label>
              <input
                {...register('name', { onChange: () => null })}
                type="text"
                size={35}
                className="form__input"
              />
              <div className="form__input-error">{errors.name?.message}</div>
            </div>

            <div className="form__input-box">
              <label className="form__input-label">Age</label>
              <input
                {...register('age', { onChange: () => null })}
                type="number"
                className="form__input"
              />
              <div className="form__input-error">{errors.age?.message}</div>
            </div>

            <div className="form__input-box">
              <label className="form__input-label">Email</label>
              <input
                {...register('email', { onChange: () => null })}
                type="text"
                size={35}
                className="form__input"
              />
              <div className="form__input-error">{errors.email?.message}</div>
            </div>

            <div className="form__input-box">
              <label className="form__input-label">Password</label>
              <input
                {...register('password', { onChange: () => null })}
                type="text"
                size={35}
                className="form__input"
              />
              <PaswordComplexity
                valueOfPassword={getValues().password?.toString()}
              />
              <div className="form__input-error password">
                {errors.password?.message}
              </div>
            </div>

            <div className="form__input-box">
              <label className="form__input-label">Confirm password</label>
              <input
                {...register('confirmPassword', { onChange: () => null })}
                type="text"
                size={35}
                className="form__input"
              />
              <div className="form__input-error">
                {errors.confirmPassword?.message}
              </div>
            </div>

            <div className="form__input-box">
              <label className="form__input-label">Gender</label>
              <select
                {...register('gender')}
                className="form__input"
                name="gender"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              <div className="form__input-error">{errors.gender?.message}</div>
            </div>

            <div className="form__input-box--checkbox">
              <input {...register('condition')} type="checkbox" />
              <label className="form__input-label">
                Terms and Conditions agreement{' '}
              </label>
              <div className="form__input-error">
                {errors.condition?.message}
              </div>
            </div>

            <div className="form__input-box">
              <label className="form__input-label">Upload picture</label>
              <input {...register('image')} type="file" />
              <div className="form__input-error">{errors.image?.message}</div>
            </div>

            <div className="form__input-box">
              <label className="form__input-label">Select country</label>
              <Controller
                name="country"
                control={control}
                render={({ field }) => (
                  <>
                    <input
                      {...field}
                      list="country-list"
                      className="form__input"
                    />
                    <datalist id="country-list">
                      {countrySelector.map((country) => (
                        <option key={country} value={country} />
                      ))}
                    </datalist>
                  </>
                )}
              />
              <div className="form__input-error password">
                {errors.country?.message}
              </div>
            </div>

            <input value="Submit" type="submit" className="form__button" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SecondFormPage;

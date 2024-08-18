import { FormEvent, useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import img from '../../assets/images/cross.png';

import './First-form.page.scss';
// import { IRideForm } from '../../models/form.model';
import { useAppDispatch } from '../../redux/hook';
import { schema } from './schema';
import { useAppSelector } from '../../redux/hook';
import { IDownloadImage } from '../../models/form.model';
import { addForm } from '../../redux/counterSlice';

const FirsFormPage = () => {
  const [state, setState] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/first-form') {
      setState(true);
    }
  }, [state]);

  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const genderRef = useRef<HTMLSelectElement>(null);
  const conditionRef = useRef<HTMLInputElement>(null);
  const countryRef = useRef<HTMLSelectElement>(null);
  const [imageRef, setImageRef] = useState<IDownloadImage>();

  const [errorState, setErrorState] = useState('');
  const countrySelector = useAppSelector((state) => state.forms.countries);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleFileChange = (event: FormEvent<HTMLInputElement>) => {
    const fileInput = event.target as HTMLInputElement;
    const file = fileInput.files?.[0];
    if (file !== undefined) setImageRef(file as unknown as IDownloadImage);
  };

  const hundleSubmit = (event: FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    const nameValue = nameRef.current?.value;
    const ageValue = Number(ageRef.current?.value);
    const emailValue = emailRef.current?.value;
    const passwordValue = passwordRef.current?.value;
    const confirmPasswordValue = confirmPasswordRef.current?.value;
    const genderValue = genderRef.current?.value;
    const conditionValue = conditionRef.current?.value;
    const countryValue = countryRef.current?.value;
    schema
      .validate({
        name: nameValue,
        age: ageValue,
        email: emailValue,
        password: passwordValue,
        confirmPassword: confirmPasswordValue,
        gender: genderValue,
        condition: conditionValue,
        image: imageRef,
        country: countryValue,
      })
      .then(() => {
        const file = imageRef as unknown as Blob;
        const reader = new FileReader();
        let base64Data: string | ArrayBuffer | null = null;

        if (file !== undefined) {
          reader.onload = function (e: ProgressEvent<FileReader>) {
            base64Data = e.target ? e.target.result : null;
            if (
              nameValue &&
              ageValue &&
              emailValue &&
              passwordValue &&
              confirmPasswordValue &&
              genderValue &&
              countryValue
            )
              dispatch(
                addForm({
                  name: nameValue,
                  age: ageValue,
                  email: emailValue,
                  password: passwordValue,
                  confirmPassword: confirmPasswordValue,
                  gender: genderValue,
                  condition: true,
                  image: base64Data,
                  country: countryValue,
                }),
              );
          };

          reader.readAsDataURL(file);
          navigate('/');
        }
      })
      .catch((error) => {
        setErrorState(error.message);
      });
  };

  return (
    <div className="wrapper">
      <div className={`form-container ${state ? 'active' : ''}`}>
        <div className="form-container__wrapper">
          <Link className="form-container__close" to={'/'}>
            <img src={img} alt="cross" />
          </Link>
          <h2 className="form-container__title">
            Uncontrolled components approach !
          </h2>

          <form className="form">
            <div className="form__input-box">
              <label className="form__input-label">Name</label>
              <input
                name="name"
                ref={nameRef}
                type="text"
                size={35}
                className="form__input"
              />
            </div>

            <div className="form__input-box">
              <label className="form__input-label">Age</label>
              <input
                name="age"
                ref={ageRef}
                type="number"
                className="form__input"
              />
            </div>

            <div className="form__input-box">
              <label className="form__input-label">Email</label>
              <input
                name="email"
                ref={emailRef}
                type="text"
                size={35}
                className="form__input"
              />
            </div>

            <div className="form__input-box">
              <label className="form__input-label">Password</label>
              <input
                name="password"
                ref={passwordRef}
                type="text"
                size={35}
                className="form__input"
              />
            </div>

            <div className="form__input-box">
              <label className="form__input-label">Confirm password</label>
              <input
                name="confirmPassword"
                ref={confirmPasswordRef}
                type="text"
                size={35}
                className="form__input"
              />
            </div>

            <div className="form__input-box">
              <label className="form__input-label">Gender</label>
              <select ref={genderRef} className="form__input" name="gender">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            <div className="form__input-box--checkbox">
              <input name="condition" ref={conditionRef} type="checkbox" />
              <label className="form__input-label">
                Terms and Conditions agreement{' '}
              </label>
            </div>

            <div className="form__input-box">
              <label className="form__input-label">Upload picture</label>
              <input name="image" onChange={handleFileChange} type="file" />
            </div>

            <div className="form__input-box">
              <label className="form__input-label">Select country</label>
              <select ref={countryRef} className="form__input" name="country">
                {countrySelector.map((el: string, ind: number) => (
                  <option key={ind} value={el}>
                    {el}
                  </option>
                ))}
              </select>
            </div>

            <div style={{ color: 'red' }}>{errorState}</div>

            <input
              onClick={(e) => hundleSubmit(e)}
              value="Submit"
              type="submit"
              className="form__button"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default FirsFormPage;

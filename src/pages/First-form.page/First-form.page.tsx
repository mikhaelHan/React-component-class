import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import img from '../../assets/images/cross.png';

import './First-form.page.scss';

const FirsFormPage = () => {
  const [state, setState] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/first-form') {
      setState(true);
    }
  }, [state]);

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
          <form className="second-form">1</form>
        </div>
      </div>
    </div>
  );
};

export default FirsFormPage;

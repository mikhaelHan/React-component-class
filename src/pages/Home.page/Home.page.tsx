import { Link } from 'react-router-dom';

import { useAppSelector } from '../../redux/hook';

import './Home.page.scss';
import { IForm } from '../../models/form.model';

const HomePage = () => {
  const selector: IForm[] = useAppSelector((state) => {
    return state.forms;
  });

  return (
    <div className="wrapper">
      <div className="home-container">
        <header className="home-header">
          <div>
            <Link className="home-header__link" to="/first-form">
              First form
            </Link>
          </div>
          <div>
            <Link className="home-header__link" to="/second-form">
              Second form
            </Link>
          </div>
        </header>
        {selector.length === 0 ? (
          <main className="home-main">...</main>
        ) : (
          <main className="home-main">
            <ul className="home-form-list">
              {selector.map((el: IForm, ind: number) => (
                <li
                  style={
                    ind === 0
                      ? { border: '0.2em solid #ff0000' }
                      : { border: '0.1em solid #000000' }
                  }
                  className="home-form-list__item"
                  key={ind}
                >
                  <p>{el.name}</p>
                  <p>{el.email}</p>
                  <p>{el.password}</p>
                  <p>{el.confirmPassword}</p>
                  <p>{el.age}</p>
                  <p>{el.gender}</p>
                  <p>{String(el.condition)}</p>
                </li>
              ))}
            </ul>
          </main>
        )}
      </div>
    </div>
  );
};

export default HomePage;

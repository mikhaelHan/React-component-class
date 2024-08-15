import { Link } from 'react-router-dom';

import './Home.page.scss';

const HomePage = () => {
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
        <main className="home-main">...</main>
      </div>
    </div>
  );
};

export default HomePage;

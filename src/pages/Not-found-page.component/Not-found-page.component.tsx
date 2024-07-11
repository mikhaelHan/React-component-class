import React from 'react';

import './Not-found-page.component.scss';
import img from '../../assets/images/404-page_logo.png';

const NotFoundPageComponent: React.FC = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-container__box">
        <div className="not-found-container__logo">
          <img
            src={img}
            alt="404-page"
            className="not-found-container__logo_img"
          />
        </div>
        <p className="not-found-container__text">
          Sorry, something <br />
          went wrong((
        </p>
      </div>
    </div>
  );
};

export default NotFoundPageComponent;

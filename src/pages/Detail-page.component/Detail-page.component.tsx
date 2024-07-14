import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

import './Detail-page.component.scss';

import img from '../../assets/images/star-wars.jpg';
import { ISearchItem } from '../../models/Search.model';
import { APIItemRequest } from '../../services/client-API.service';

const DetailPageComponent: React.FC = () => {
  const [dataState, setDataState] = useState<{
    name: string;
    gender: string;
    height: string;
    mass: string;
    eye_color: string;
  }>({
    name: '',
    gender: '',
    height: '',
    mass: '',
    eye_color: '',
  });

  const [loadState, setLoadState] = useState<boolean>(false);

  const location = useLocation();
  const detail: string | null = new URLSearchParams(location.search).get(
    'detail',
  );

  const getData = async (qwery: string) => {
    setLoadState(true);

    const ApiRes: ISearchItem | null = await APIItemRequest(`${qwery}`);
    if (ApiRes) {
      setDataState(() => ({
        name: ApiRes.name,
        gender: ApiRes.gender,
        height: ApiRes.height,
        mass: ApiRes.mass,
        eye_color: ApiRes.eye_color,
      }));
      setLoadState(false);
    }
  };

  useEffect(() => {
    if (detail) {
      getData(detail);
    }
  }, []);

  return (
    <div className="detail-page-container">
      {loadState ? (
        <p className="detail-page-container__loading">Loading ...</p>
      ) : (
        <div className="detail-page-container__box">
          <div className="detail-page-container__img">
            <img
              className="detail-page-container__imgage"
              src={img}
              alt="star-wars"
            />
          </div>
          <p className="detail-page-container__title">{dataState.name}</p>
          <div
            style={{ border: `0.2rem solid ${dataState.eye_color}` }}
            className="detail-page-container__info"
          >
            <p className="detail-page-container__item">
              Gender:{' '}
              <span className="detail-page-container__item-bold">
                {dataState.gender}
              </span>
            </p>
            <p className="detail-page-container__item">
              Height:{' '}
              <span className="detail-page-container__item-bold">
                {dataState.height}
              </span>
            </p>
            <p className="detail-page-container__item">
              Mass:{' '}
              <span className="detail-page-container__item-bold">
                {dataState.mass}
              </span>
            </p>
          </div>
          <p className="detail-page-container__link">
            <Link to="/">← Back</Link>
          </p>
        </div>
      )}
    </div>
  );
};

export default DetailPageComponent;

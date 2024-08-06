import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import Image from 'next/image';
import { useGetCardDetailQuery } from '../../redux/RtkApi';

import './Detail-page.component.scss';

import img from '../../../../public/star-wars.jpg';
import { ISearchItem } from '../../models/Search.model';

const DetailPageComponent: React.FC = () => {
  const location = useLocation();
  const detail: string | null = new URLSearchParams(location.search).get(
    'detail',
  );

  const { data, isLoading } = useGetCardDetailQuery<{
    data: ISearchItem;
    isLoading: boolean;
  }>(detail);

  return (
    <div className="detail-page-container">
      {isLoading ? (
        <p className="detail-page-container__loading">Loading ...</p>
      ) : (
        <div className="detail-page-container__box">
          <div className="detail-page-container__img">
            <Image
              className="detail-page-container__imgage"
              src={img.src}
              alt="star-wars"
            />
          </div>
          <p className="detail-page-container__title">{data.name}</p>
          <div
            style={{ border: `0.2rem solid ${data.eye_color}` }}
            className="detail-page-container__info"
          >
            <p className="detail-page-container__item">
              Gender:{' '}
              <span className="detail-page-container__item-bold">
                {data.gender}
              </span>
            </p>
            <p className="detail-page-container__item">
              Height:{' '}
              <span className="detail-page-container__item-bold">
                {data.height}
              </span>
            </p>
            <p className="detail-page-container__item">
              Mass:{' '}
              <span className="detail-page-container__item-bold">
                {data.mass}
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

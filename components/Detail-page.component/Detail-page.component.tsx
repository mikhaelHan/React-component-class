import { useLocation, Link } from '@remix-run/react';
import { ISearchItem } from 'models/Search.model';
import { useGetCardDetailQuery } from 'redux/RtkApi';
import img from '../../public/star-wars.jpg';

const DetailPageComponent: React.FC = () => {
  const location = useLocation();
  const detail = location.pathname.toString().split('=').reverse()[0];

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
            <img
              className="detail-page-container__imgage"
              src={img}
              alt="star-wars"
            />
          </div>
          <h3 className="detail-page-container__title">{data?.name}</h3>
          <div
            style={{ border: `0.2rem solid ${data?.eye_color}` }}
            className="detail-page-container__info"
          >
            <p className="detail-page-container__item">
              Gender:{' '}
              <span className="detail-page-container__item-bold">
                {data?.gender}
              </span>
            </p>
            <p className="detail-page-container__item">
              Height:{' '}
              <span className="detail-page-container__item-bold">
                {data?.height}
              </span>
            </p>
            <p className="detail-page-container__item">
              Mass:{' '}
              <span className="detail-page-container__item-bold">
                {data?.mass}
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

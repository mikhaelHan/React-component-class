import Image from 'next/image';
import Link from 'next/link';

import img from '../../public/star-wars.jpg';
import { useGetCardDetailQuery } from '@/redux/RtkApi';
import { ISearchItem } from '@/models/Search.model';

import { useRouter } from 'next/router';

const DetailPageComponent: React.FC = () => {
  const router = useRouter();
  const path = router.asPath;
  const detail = path.split('=').reverse();
  const { data, isLoading } = useGetCardDetailQuery<{
    data: ISearchItem;
    isLoading: boolean;
  }>(detail[0]);

  return (
    <div className="detail-page-container">
      {isLoading ? (
        <p className="detail-page-container__loading">Loading ...</p>
      ) : (
        <div className="detail-page-container__box">
          <div className="detail-page-container__img">
            <Image
              className="detail-page-container__imgage"
              src={img}
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
            <Link href="/">← Back</Link>
          </p>
        </div>
      )}
    </div>
  );
};

export default DetailPageComponent;

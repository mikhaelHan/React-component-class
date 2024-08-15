import { useEffect } from 'react';
import './First-form.page.scss';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { active } from '../../redux/counterSlice.isActivePage';
import { Page } from '../../models/redux.model';

const FirsFormPage = () => {
  const isActive = useAppSelector((state) => state.activeFormPage.firstPage);
  const dispatch = useAppDispatch();

  useEffect(() => {
    window.addEventListener('load', () => {
      dispatch(active(Page.first));
    });
    return () => {
      window.removeEventListener('load', () => {});
    };
  }, []);

  return (
    <div className="wrapper">
      <div className={`first-container ${isActive ? 'active' : ''}`}>
        <div className="first-form">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          tempora repellendus quia, dolorem sunt obcaecati incidunt rem cumque
          ducimus odio unde quod deleniti. Illo alias ullam fuga nemo dolores
          molestias?
        </div>
      </div>
    </div>
  );
};

export default FirsFormPage;

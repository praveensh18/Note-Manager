import React from 'react';
import s from './style.module.css';
import logoSrc from 'assets/images/logo.png';
import { Logo } from 'components/Logo';
import ButtonPrimary from 'components/ButtonPrimary/ButtonPrimary';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className={`row ${s.container}`}>
      <div className='col-xs-12 col-sm-4'>
        <Logo
          title='Notomatic'
          subtitle={'Manage your notes'}
          image={logoSrc}
          onLogoClick={() => navigate('/')}
        ></Logo>
      </div>
      <div className='col-xs-12 col-sm-8 text-end'>
        <ButtonPrimary onBtnClick={() => navigate('/note/new')}>
          Add Note +
        </ButtonPrimary>
      </div>
    </div>
  );
};

export default Header;

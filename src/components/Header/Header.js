import React from 'react';

import './Header.less';
import MenuComponent from '../Menu/MenuComponent';

const Header = () => {
  return (
    <>
      <div className='header-container'>
        <h2 className='name'>QY</h2>
        <MenuComponent></MenuComponent>
      </div>
    </>
  );
};

export default Header;

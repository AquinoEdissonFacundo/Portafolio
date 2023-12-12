import React from 'react';
import Styles from './page.module.css';
import Body from '../componentes/body/body';
import About from '../componentes/about/about';
const page = () => {
  return (
    <div className={Styles.pagecontainer}>
      <div>
        <Body />
        <About />
      </div>
    </div>
  );
};

export default page;

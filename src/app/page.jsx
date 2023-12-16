import React from 'react';
import Styles from './page.module.css';
import Body from '../componentes/body/body';
import Proyects from '../componentes/proyects/proyects';
import Skills from '../componentes/skills/skills';

const page = () => {
  return (
    <div className={Styles.pagecontainer}>
      <div>
        <Body />
        <Proyects />
        <Skills />
      </div>
    </div>
  );
};

export default page;

import React from 'react';
import Styles from './page.module.css';
import Body from '../componentes/body/body';
import Proyects from '../componentes/proyects/proyects';
import Skills from '../componentes/skills/skills';
import Contact from '../componentes/Contact/Contact';
const page = () => {
  return (
    <div className={Styles.pagecontainer}>
      <div>
        <Body />
        <Proyects />
        <Skills />
        <Contact />
      </div>
    </div>
  );
};

export default page;

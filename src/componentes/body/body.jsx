import React from 'react';
import Styles from './body.module.css';
import Image from 'next/image';
const body = () => {
  const texto = '<>Desarrollador Web</>';
  return (
    <div className={Styles.bodycontainer}>
      <div className={Styles.bodyheader}>
        <h1 className={Styles.bodyheading}>👋🏻Hola,soy</h1>
        <h1 className={Styles.bodyheadingname}>
          <strong className={Styles.bodyname}>Facundo</strong>
        </h1>
        <p className={Styles.Desarrolador}>{texto}</p>
      </div>
      <div className={Styles.bodyimgcontainer}>
        <Image
          className={Styles.bodyimg}
          src={'/pc.svg'}
          width={200}
          height={200}
        ></Image>
      </div>
    </div>
  );
};

export default body;

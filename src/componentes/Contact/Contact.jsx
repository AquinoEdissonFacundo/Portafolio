import React from 'react';
import styles from './Contact.module.css';
import Image from 'next/image';

const contactme = () => {
  return (
    <div className={styles.Contactcontainer}>
      <div>
        <h1 className={styles.Contact}>
          Contacto
          <Image
            className={styles.lineasvg}
            src={'/linea.svg'}
            width={200}
            height={200}
          />
        </h1>
      </div>
      <div className={styles.containericons}>
        <a
          href='https://github.com/AquinoEdissonFacundo'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image
            className={styles.iconcontac}
            src={'/GitHub.svg'}
            width={200}
            height={200}
          />
        </a>
        <a
          href='https://www.linkedin.com/in/facundo-toloza/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image
            className={styles.iconcontac}
            src={'/Linkedin.svg'}
            width={200}
            height={200}
          />
        </a>
        <a
          href='mailto:aquinoedissonfacundo@gmail.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image
            className={styles.iconcontac}
            src={'/correo.svg'}
            width={200}
            height={200}
          />
        </a>
      </div>
    </div>
  );
};

export default contactme;

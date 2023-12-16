// import React from 'react';
// import styles from './proyects.module.css';
// import Image from 'next/image';
// const about = () => {
//   return (
//     <div className={styles.proyectoscontianer}>
//       <div className={styles.textcontaimer}>
//         <h1 className={styles.proyectos}>
//           Proyectos
//           <Image
//             className={styles.lineasvg}
//             src={'/linea.svg'}
//             width={200}
//             height={200}
//           ></Image>
//         </h1>
//       </div>
//       <div className={styles.proyectoscards}>
//         //aqui nesecito mostrar todas las cards del json
//       </div>
//     </div>
//   );
// };

// export default about;
import React from 'react';
import styles from './proyects.module.css';
import Image from 'next/image';
import proyectosData from './proyectos.json';

const About = () => {
  return (
    <div className={styles.proyectoscontianer}>
      <div className={styles.textcontaimer}>
        <h1 className={styles.proyectos}>
          Proyectos
          <Image
            className={styles.lineasvg}
            src={'/linea.svg'}
            width={200}
            height={200}
          />
        </h1>
      </div>
      <div className={styles.proyectoscards}>
        {proyectosData.proyectos.map((proyecto, index) => (
          <div key={index} className={styles.proyectocard}>
            <div className={styles.tecnologias}>
              {proyecto.imagenportada.map((imagenportada, index) => (
                <div key={index} className={styles.tecnologia}>
                  <Image
                    className={styles.imagenproyectos}
                    src={imagenportada.imagen}
                    alt={imagenportada.nombre}
                    width={100}
                    height={100}
                  />
                  <span>{imagenportada.nombre}</span>
                </div>
              ))}
            </div>
            <h2>{proyecto.nombre}</h2>
            <p>{proyecto.descripcion}</p>

            <div className={styles.enlaces}>
              <Image
                className={styles.Vectoreye}
                src={'/Vectoreye.svg'}
                width={20}
                height={20}
              />
              <a
                href={proyecto.url_repo}
                target='_blank'
                rel='noopener noreferrer'
              >
                Repositorio
              </a>
              <a
                href={proyecto.url_demo}
                target='_blank'
                rel='noopener noreferrer'
              >
                Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;

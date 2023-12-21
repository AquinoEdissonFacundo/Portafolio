'use client';
import React, { useState } from 'react';
import { Modal, Button, IconButton } from '@mui/material';
import styles from './proyects.module.css';
import Image from 'next/image';
import Link from 'next/link';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';

const Projects = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setOpenModal(true);
    setCurrentImage(0);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    setOpenModal(false);
  };

  const handlePrevImage = () => {
    setCurrentImage((prevIndex) =>
      prevIndex > 0
        ? prevIndex - 1
        : projectData[selectedProject].imgproyects.length - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImage((prevIndex) =>
      prevIndex < projectData[selectedProject].imgproyects.length - 1
        ? prevIndex + 1
        : 0
    );
  };

  const projectData = {
    proyectoGlamify: {
      title: 'Proyecto Glamify',
      content:
        'Aplicación que tiene el objetivo de competir con el resto de tiendas online de ropa de alta moda/alta costura. De manera que la experiencia de usuario sea buena y que de forma sencilla pueda: navegar por las diferentes secciones, hacer compras o guardarlas en favorito para mas tarde acceder a ellas desde el carrito de compras.',
      repositorylink: 'https://images.app.goo.gl/gomvVhdMNc6TUZVFA',
      imgproyects: [
        '/aprendeinstitute.png',
        '/Aprendeinstituteicons.png',
        '/Aprendeinstitutex.png',
      ],
    },
    proyectoFodd: {
      title: 'Proyecto Fodd',
      content:
        'Aplicación web que tiene como objetivo la búsqueda y descubrimiento de recetas tanto de comidas como de postres conectando una API a través del filtrado por “tipo de comida”, de A-Z y de Z-A, búsqueda por nombre y una paginación, que permite que la persona pueda navegar y encontrar miles de recetas en caso no cuente con el conocimiento previo de la receta; incluso tendrá la facilidad de crear su propia receta de ser necesario.',
      repositorylink: 'https://images.app.goo.gl/gomvVhdMNc6TUZVFA',
      imgproyects: ['/alfacrew.png', '/Captura.png', '/aprendeinstitute.png'],
    },
    proyectoInstitute: {
      title: 'Proyecto Institute',
      content:
        'Landing page que tiene como objetivo el descubrimiento de todos los cursos que se pueden tomar dentro del instituto de “Aprende”, Belleza, Gastronomía, Plomería, Energía Solar, entre tantos otros. Tener un formulario en el cual se pueda dejar datos como Nombre y Apellido, Número de Teléfono, Email, Curso de Interés. Para que luego un asesor pueda comunicarse con el cliente.',
    },
    poyectoRickAndMorty: {
      title: 'Proyecto Rick And Morty',
      content: 'el proyecto Rick And Morty.',
      repositorylink: 'https://images.app.goo.gl/gomvVhdMNc6TUZVFA',
    },
  };

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
        {Object.keys(projectData).map((projectKey) => (
          <div
            key={projectKey}
            className={`${styles.card} ${styles[projectKey]}`}
            onClick={() => handleOpenModal(projectKey)}
          >
            <div className={styles.imgproyects}></div>
            <div className={styles.titleBar}>
              {projectData[projectKey].title}
            </div>
          </div>
        ))}
      </div>

      <Modal
        className={styles.cotainermodal}
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <div className={styles.modalContainer}>
          {selectedProject && (
            <>
              <div className={styles.modalbuttonCloseContainer}>
                <IconButton
                  onClick={handleCloseModal}
                  className={styles.modalbuttonclose}
                >
                  <DisabledByDefaultIcon />
                </IconButton>
              </div>
              <h2 id='modal-modal-title'>
                {projectData[selectedProject].title}
              </h2>
              <p
                className={styles.modaldescription}
                id='modal-modal-description'
              >
                {projectData[selectedProject].content}
              </p>
              <div className={styles.modalImage}>
                <a
                  href={projectData[selectedProject].imgproyects[currentImage]}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Image
                    src={projectData[selectedProject].imgproyects[currentImage]}
                    alt={`Imagen ${currentImage}`}
                    width={500}
                    height={300}
                  />
                </a>
              </div>

              <div className={styles.modalPagination}>
                <button
                  className={styles.modalPrevButton}
                  onClick={handlePrevImage}
                  disabled={currentImage === 0}
                >
                  Anterior
                </button>
                <p>
                  {currentImage + 1} de{' '}
                  {projectData[selectedProject].imgproyects.length}
                </p>

                <button
                  className={styles.modalNextButton}
                  onClick={handleNextImage}
                  disabled={
                    currentImage ===
                    projectData[selectedProject].imgproyects.length - 1
                  }
                >
                  Siguiente
                </button>
              </div>
              <div className={styles.modalbuttons}>
                <Link
                  href={projectData[selectedProject]?.repositorylink || '/'}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Button className={styles.modalbuttonopen}>
                    Ver Repositorio
                  </Button>
                </Link>
              </div>
            </>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default Projects;

// 'use client';

// import React from 'react';
// import { Modal, Button } from '@mui/material';
// import styles from './proyects.module.css';
// import Image from 'next/image';
// import Slider from 'react-slick';
// import Link from 'next/link';

// const Projects = () => {
//   const [openModal, setOpenModal] = React.useState(false);
//   const [selectedProject, setSelectedProject] = React.useState(null);
//   const [sliderIndex, setSliderIndex] = React.useState(0);

//   const handleOpenModal = (project) => {
//     setSelectedProject(project);
//     setOpenModal(true);
//     setSliderIndex(0);
//   };

//   const handleCloseModal = () => {
//     setSelectedProject(null);
//     setOpenModal(false);
//   };

//   const projectData = {
//     proyectoGlamify: {
//       title: 'Proyecto Glamify',
//       content:
//         'Aplicación que tiene el objetivo de competir con el resto de tiendas online de ropa de alta moda/alta costura. De manera que la experiencia de usuario sea buena y que de forma sencilla pueda: navegar por las diferentes secciones, hacer compras o guardarlas en favorito para mas tarde acceder a ellas desde el carrito de compras.',
//       repositorylink: 'https://images.app.goo.gl/gomvVhdMNc6TUZVFA',
//       imgproyects: ['/alfacrew.png', '/Captura.png', '/aprendeinstitute.png'],
//     },

//     proyectoFodd: {
//       title: 'Proyecto Fodd',
//       content:
//         'Aplicación web que tiene como objetivo la búsqueda y descubrimiento de recetas tanto de comidas como de postres conectando una API a través del filtrado por “tipo de comida”, de A-Z y de Z-A, búsqueda por nombre y una paginación, que permite que la persona pueda navegar y encontrar miles de recetas en caso no cuente con el conocimiento previo de la receta; incluso tendrá la facilidad de crear su propia receta de ser necesario.',
//       repositorylink: 'https://images.app.goo.gl/gomvVhdMNc6TUZVFA',
//       imgproyects: ['/alfacrew.png', '/Captura.png', '/aprendeinstitute.png'],
//     },
//     proyectoInstitute: {
//       title: 'Proyecto Institute',
//       content:
//         'Landing page que tiene como objetivo el descubrimiento de todos los cursos que se pueden tomar dentro del instituto de “Aprende”, Belleza, Gastronomía, Plomería, Energía Solar, entre tantos otros. Tener un formulario en el cual se pueda dejar datos como Nombre y Apellido, Número de Teléfono, Email, Curso de Interés. Para que luego un asesor pueda comunicarse con el cliente.',
//     },
//     poyectoRickAndMorty: {
//       title: 'Proyecto Rick And Morty',
//       content: 'el proyecto Rick And Morty.',
//       repositorylink: 'https://images.app.goo.gl/gomvVhdMNc6TUZVFA',
//     },
//   };
//   console.log(projectData[selectedProject]?.images);

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
//           />
//         </h1>
//       </div>
//       <div className={styles.proyectoscards}>
//         {Object.keys(projectData).map((projectKey) => (
//           <div
//             key={projectKey}
//             className={`${styles.card} ${styles[projectKey]}`}
//             onClick={() => handleOpenModal(projectKey)}
//           >
//             <div className={styles.imgproyects}></div>
//             <div className={styles.titleBar}>
//               {projectData[projectKey].title}
//             </div>
//           </div>
//         ))}
//       </div>

//       <Modal
//         className={styles.cotainermodal}
//         open={openModal}
//         onClose={handleCloseModal}
//         aria-labelledby='modal-modal-title'
//         aria-describedby='modal-modal-description'
//       >
//         <div className={styles.modalContainer}>
//           {selectedProject && (
//             <>
//               <h2 id='modal-modal-title'>
//                 {projectData[selectedProject].title}
//               </h2>
//               <p
//                 className={styles.modaldescription}
//                 id='modal-modal-description'
//               >
//                 {projectData[selectedProject].content}
//               </p>
//               <Slider
//                 infinite={false}
//                 beforeChange={(oldIndex, newIndex) => setSliderIndex(newIndex)}
//                 dots
//                 appendDots={(dots) => (
//                   <div
//                     style={{
//                       position: 'absolute',
//                       bottom: 0,
//                       left: '50%',
//                       transform: 'translateX(-50%)',
//                     }}
//                   >
//                     <ul style={{ margin: '0', padding: '0' }}>{dots}</ul>
//                   </div>
//                 )}
//               >
//                 {projectData[selectedProject].imgproyects.map(
//                   (image, index) => (
//                     <div key={index} className={styles.modalImage}>
//                       <a href={image} target='_blank' rel='noopener noreferrer'>
//                         <Image
//                           src={image}
//                           alt={`Imagen ${index}`}
//                           width={500}
//                           height={300}
//                         />
//                       </a>
//                     </div>
//                   )
//                 )}
//               </Slider>
//               <p style={{ textAlign: 'center', marginTop: '10px' }}>
//                 {sliderIndex + 1} de{' '}
//                 {projectData[selectedProject].imgproyects.length}
//               </p>
//               <Button onClick={handleCloseModal}>Cerrar</Button>
//               <Link
//                 href={projectData[selectedProject]?.repositorylink || '/'}
//                 target='_blank'
//                 rel='noopener noreferrer'
//               >
//                 <Button>Ver Repositorio</Button>
//               </Link>
//             </>
//           )}
//         </div>
//       </Modal>
//     </div>
//   );
// };

// export default Projects;

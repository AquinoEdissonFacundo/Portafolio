'use client';
import React from 'react';
import { motion } from 'framer-motion'; // Importa motion desde framer-motion
import Styles from './body.module.css';
import Image from 'next/image';
import Text from './text';

const Body = () => {
  const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const imageVariants = {
    initial: {
      opacity: 0,
      scale: 0.5,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      className={Styles.bodycontainer}
      initial='initial'
      animate='animate'
    >
      <motion.div className={Styles.bodyheader} variants={textVariants}>
        <h1 className={Styles.bodyheading}>👋🏻Hola, soy</h1>
        <h1 className={Styles.bodyheadingname}>
          <strong className={Styles.bodyname}>Facundo</strong>
        </h1>
        <div className={Styles.Desarrolador}>
          <Text />
        </div>
      </motion.div>
      <motion.div className={Styles.bodyimgcontainer} variants={imageVariants}>
        <Image
          className={Styles.bodyimg}
          src='/pc.svg'
          width={200}
          height={200}
        />
      </motion.div>
    </motion.div>
  );
};

export default Body;

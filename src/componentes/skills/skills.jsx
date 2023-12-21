import React from 'react';
import styles from './skills.module.css';
import Image from 'next/image';

const skillsData = [
  { name: 'Sass', icon: '/sass.svg' },
  { name: 'Javascript', icon: '/javascript.svg' },
  { name: 'React.js', icon: '/reactjs.svg' },
  { name: 'Next', icon: '/next.svg' },
  { name: 'Node.js', icon: '/node-js.svg' },
  { name: 'HTML', icon: '/html.svg' },
  { name: 'Git', icon: '/git.svg' },
  { name: 'Css3', icon: '/css.svg' },
  { name: 'Figma', icon: '/figma.svg' },
  { name: 'PostgresSQL', icon: '/pgsql.svg' },
  { name: 'Redux', icon: '/css.svg' },
  { name: 'Express', icon: '/Express.svg' },
];

const Skills = () => {
  return (
    <div className={styles.skillcontainer}>
      <div className={styles.textcontainer}>
        <h1 className={styles.skillsh1}>
          Habilidades
          <Image
            className={styles.lineasvg}
            src={'/linea.svg'}
            width={200}
            height={200}
          />
        </h1>
      </div>
      <div className={styles.containersskillicons}>
        {skillsData.map((skill, index) => (
          <div key={index} className={styles.skill}>
            <p>{skill.name}</p>
            <Image
              className={styles.iconsskills}
              src={skill.icon}
              width={50}
              height={50}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

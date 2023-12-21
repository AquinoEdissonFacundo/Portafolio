import Link from 'next/link';
import React from 'react';
import Styles from './navbar.module.css';
import Image from 'next/image';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Person4OutlinedIcon from '@mui/icons-material/Person4Outlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import FilePresentOutlinedIcon from '@mui/icons-material/FilePresentOutlined';
Image;
const navbar = () => {
  return (
    <div className={Styles.navbarcontainer}>
      <nav className={Styles.navcontainer}>
        <ul className={Styles.navbarul}>
          <li>
            <Link className={Styles.navbarlink} href={'./'}>
              <HomeOutlinedIcon /> Home
            </Link>
          </li>
          <li>
            <Link className={Styles.navbarlink} href={'./about'}>
              <Person4OutlinedIcon /> About
            </Link>
          </li>

          <li>
            <Link className={Styles.navbarlink} href={'./resume'}>
              <FilePresentOutlinedIcon /> Resume
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default navbar;

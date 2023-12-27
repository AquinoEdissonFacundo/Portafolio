import Navbar from '../componentes/navbar/navbar.jsx';
import Head from 'next/head';
// import Body from '@/componentes/body/body.jsx';
import './stylesglobal.css';
export const metadata = {
  title: 'Edisson Facundo',
  description: 'Portafolio: Edisson Facundo Aquino Toloza',
  keywords: 'Portafolio, programador web, frontend, backend, fullstack',
};

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <meta name='google' content='notranslate' />
      </Head>
      <html translate='no'>
        <body translate='no'>
          <Navbar />
          {children}
        </body>
      </html>
    </>
  );
}

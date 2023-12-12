import Navbar from '../componentes/navbar/navbar.jsx';
import Body from '@/componentes/body/body.jsx';
import './stylesglobal.css';
export const metadata = {
  title: 'Edisson Facundo',
  description: 'Portafolio: Edisson Facundo Aquino Toloza',
  keywords: 'Portafolio, programador web, frontend, backend, fullstack',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

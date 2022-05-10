
import Footer from './Footer';
import Navber from './Navber';

export const Layout = ({children}) => {
  return(
      <>
      <Navber/>
      {children}
      <Footer/>
      </>
  );
};

import { MainContent } from '../mainContent/MainContent';
import { Footer } from '../footer/Footer';
import { Outlet } from 'react-router-dom';


export const Main = () => {
  return (
    <>
      <MainContent />
      <Footer />
      <Outlet />
    </>
  )
}
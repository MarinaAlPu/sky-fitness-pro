// import { Header } from '../header/Header';
import { MainContent } from '../mainContent/MainContent';
import { Footer } from '../footer/Footer';
import { Outlet } from 'react-router-dom';


export const Main = () => {
  return (
    <>
      {/* <Header /> */} {/* Вынесли в Layout */}
      <MainContent />
      <Footer />
      <Outlet />
    </>
  )
}
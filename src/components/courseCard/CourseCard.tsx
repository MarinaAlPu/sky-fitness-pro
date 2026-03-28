// import { Header } from '../header/Header';
import { CourseContent } from '../courseContent/CourseContent';
import { Outlet } from 'react-router-dom';


export const CourseCard = () => {

  return (
    <>
      {/* <Header /> */} {/* Вынесли в Layout */}
      <CourseContent />
      <Outlet /> {/* Место для модалки Login/Registration */}
    </>
  )
}

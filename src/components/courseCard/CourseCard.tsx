import { CourseContent } from '../courseContent/CourseContent';
import { Outlet } from 'react-router-dom';


export const CourseCard = () => {

  return (
    <>
      <CourseContent />
      <Outlet />
    </>
  )
}

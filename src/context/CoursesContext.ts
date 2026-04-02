import { createContext, useContext } from "react";
import type { CourseType } from "../types/types";


export type CoursesContextType = {
  courses: CourseType[];
  getCourses: () => Promise<void>;
  userCourses: string[];
  addUserCourse: (courseId: string, token: string) => void;
  deleteUserCourse: (courseId: string, token: string) => void;
  removeUserCoursesFromLS: () => void;
  getUserCourses: (token: string) => void;
  getWorkouts: (courseId: string, token: string) => void;
  workouts: any[];
};

export type WorkoutsType = {
  _id: string;
  name: string;
  video: string;
  exercises: string[];
}


export const CoursesContext = createContext<CoursesContextType | undefined>(
  undefined
);


export const useCourses = () => {
  const context = useContext(CoursesContext);
  if (!context) {
    throw new Error("useCourses должен использоваться внутри CoursesProvider. Проверьте, обернуто ли приложение в CoursesProvider");
  }
  return context;
};

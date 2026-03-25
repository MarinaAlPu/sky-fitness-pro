import { createContext } from "react";
import type { CourseType } from "../types/types";


export type CoursesContextType = {
  courses: CourseType[];
  getCourses: () => void;
}

export const CoursesContext = createContext<CoursesContextType | undefined>(
  undefined
);

import { createContext, useContext } from "react";
import type { CourseType } from "../types/types";
import type { CourseProgressReturnType, getCourseWorkoutsReturnType, getWorkoutReturnType, WorkoutProgressReturnType } from "../services/courses";


export type CoursesContextType = {
  courses: CourseType[];
  getCourses: () => Promise<void>;
  userCourses: string[];
  addUserCourse: (courseId: string, token: string) => void;
  deleteUserCourse: (courseId: string, token: string) => void;
  removeUserCoursesFromLS: () => void;
  getUserCourses: (token: string) => void;
  getWorkouts: (courseId: string, token: string) => void;
  workouts: getCourseWorkoutsReturnType[];
  getWorkoutData: (workoutId: string, token: string) => void;
  workout: getWorkoutReturnType | null;
  currentCourseName: string;
  getUserCourseProgress: (courseId: string, token: string) => void;
  courseProgress: Record<string, CourseProgressReturnType>;
  getUserWorkoutProgress: (courseId: string, workoutId: string, token: string) => void;
  workoutProgress: WorkoutProgressReturnType | null;
  currentCourseId: string;
  saveProgress: (courseId: string, workoutId: string, token: string, progressData: number[]) => void;
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

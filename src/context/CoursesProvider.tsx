import { useState, type ReactNode } from "react";
import { CoursesContext } from "./CoursesContext";
import { addCourse, deleteCourse, fetchCourses, fetchUserCourses } from "../services/courses";
import type { CourseType } from "../types/types";


type CoursesProviderProps = {
  children: ReactNode;
};


export const CoursesProvider = ({ children }: CoursesProviderProps) => {
  const [courses, setCourses] = useState<CourseType[]>([]);
  const [userCourses, setUserCourses] = useState<string[]>(() => {
    try {
      const userCoursesInLS = localStorage.getItem("userCourses");
      if (!userCoursesInLS) {
        console.log("У пользователя нет курсов");
        return [];
      }
      console.log("Курсы юзера из LS: ", JSON.parse(userCoursesInLS));

      // return userCoursesInLS ? JSON.parse(userCoursesInLS) : [];
      return JSON.parse(userCoursesInLS);
    } catch (err) {
      console.error("Ошибка при получении курсов из LS:", err);
      return [];
    }
  });


  const getCourses = async () => {
    try {
      const data = await fetchCourses();
      // console.log(data);
      setCourses(data);
    } catch (err) {
      console.error("Ошибка при получении курсов: ", err);
    } finally {
      // console.log("зашли finally");
    }
  };


  const addUserCourse = async (courseId: string, token: string) => {
    try {
      await addCourse(courseId, token);

      setUserCourses((prev) => {
        if (prev.includes(courseId)) return prev;

        const updated = [...prev, courseId];
        localStorage.setItem("userCourses", JSON.stringify(updated));
        return updated;
      })
      console.log("Добавили курс");
    } catch (err) {
      console.error("Ошибка при добавлении круса: ", err);
    }
  };

  const deleteUserCourse = async (courseId: string, token: string) => {
    try {
      await deleteCourse(courseId, token);

      setUserCourses((prev) => {
        const updated = prev.filter((id) => id !== courseId);
        localStorage.setItem("userCourses", JSON.stringify(updated));
        return updated;
      })
      console.log("Удалили курс");
    } catch (err) {
      console.error("Ошибка при удалении круса: ", err);
    }
  };

  const removeUserCoursesFromLS = () => {
    setUserCourses([]);
    localStorage.removeItem("userCourses");
  };

  const getUserCourses = async (token: string) => {
    try {
      const response = await fetchUserCourses(token);
      console.log("response: ", response);

      const userCoursesIds = response.selectedCourses || [];

      setUserCourses(userCoursesIds);
      localStorage.setItem("userCourses", JSON.stringify(userCoursesIds));
    } catch (err) {
      console.error("Ошибка при загрузке курсов пользователя: ", err);
    }
  };


  return (
    <CoursesContext.Provider
      value={{
        courses,
        getCourses,
        userCourses,
        addUserCourse,
        deleteUserCourse,
        removeUserCoursesFromLS,
        getUserCourses
      }}
    >
      {children}
    </CoursesContext.Provider>
  )
}
import { useEffect, useState, type ReactNode } from "react";
import { CoursesContext } from "./CoursesContext";
import { addCourse, deleteCourse, fetchCourses, fetchUserCourses, getCourseProgress, getCourseWorkouts, getWorkout, getWorkoutProgress, saveWorkoutProgress, type CourseProgressReturnType, type getCourseWorkoutsReturnType, type getWorkoutReturnType, type WorkoutProgressReturnType } from "../services/courses";
import type { CourseType } from "../types/types";
import { useAuth } from "./AuthContext";


type CoursesProviderProps = {
  children: ReactNode;
};


export const CoursesProvider = ({ children }: CoursesProviderProps) => {
  const [courses, setCourses] = useState<CourseType[]>([]);
  const [userCourses, setUserCourses] = useState<string[]>(() => {
    try {
      const userCoursesInLS = localStorage.getItem("userCourses");
      if (!userCoursesInLS) {
        // console.log("У пользователя нет курсов");
        return [];
      }
      // console.log("Курсы юзера из LS: ", JSON.parse(userCoursesInLS));

      // return userCoursesInLS ? JSON.parse(userCoursesInLS) : [];
      return JSON.parse(userCoursesInLS);
    } catch (err) {
      console.error("Ошибка при получении курсов из LS:", err);
      return [];
    }
  });
  const [workouts, setWorkouts] = useState<getCourseWorkoutsReturnType | []>([]);
  const [workout, setWorkout] = useState<getWorkoutReturnType | null>(null);
  const [currentCourseName, setCurrentCourseName] = useState<string>("");
  const [courseProgress, setCourseProgress] = useState<Record<string, CourseProgressReturnType>>({});
  const [workoutProgress, setWorkoutProgress] = useState<WorkoutProgressReturnType | null>(null);
  const [currentCourseId, setCurrentCourseId] = useState<string>("");
  const { token } = useAuth();


  useEffect(() => {
    getCourses();
  }, []);

  useEffect(() => {
    if (token) {
      getUserCourses(token);
    } else {
      setUserCourses([]);
      setCourseProgress({});
      setWorkoutProgress(null);
      localStorage.removeItem("userCourses");
    }
  }, [token]);


  useEffect(() => {
    if (workout && courses.length > 0) {
      const currentCourse = courses.find((course) =>
        course.workouts.includes(workout._id)
      );

      if (currentCourse) {
        setCurrentCourseName(currentCourse.nameRU);
        setCurrentCourseId(currentCourse._id);
      }
    }
  }, [workout, courses]);


  const getCourses = async () => {
    try {
      const data = await fetchCourses();
      setCourses(data);
    } catch (err) {
      console.error("Ошибка при получении курсов: ", err);
    } finally {
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

      const userCoursesIds = response.user?.selectedCourses || [];

      setUserCourses(userCoursesIds);
      localStorage.setItem("userCourses", JSON.stringify(userCoursesIds));
    } catch (err) {
      console.error("Ошибка при загрузке курсов пользователя: ", err);
    }
  };

  const getWorkouts = async (courseId: string, token: string) => {
    try {
      const response = await getCourseWorkouts(courseId, token);

      setWorkouts(response);
    } catch (err) {
      console.error("Ошибка при загрузке тренировок курса: ", err);
    }
  };

  const getWorkoutData = async (workoutId: string, token: string) => {
    try {
      const response = await getWorkout(workoutId, token);

      setWorkout(response);

      const workoutCourse = courses.find((course) => course.workouts.includes(workoutId));

      if (workoutCourse) {
        setCurrentCourseName(workoutCourse.nameRU);
        setCurrentCourseId(workoutCourse._id);
      }
    } catch (err) {
      console.error("Ошибка при загрузке тренировки: ", err);
    }
  };

  const getUserCourseProgress = async (courseId: string, token: string) => {
    try {
      const data = await getCourseProgress(courseId, token);

      setCourseProgress((prev) => ({
        ...prev,
        [courseId]: data
      }))
    } catch (err) {
      console.error("Ошибка при получении прогресса курса:", err);
    }
  };

  const getUserWorkoutProgress = async (courseId: string, workoutId: string, token: string) => {
    try {
      const data = await getWorkoutProgress(courseId, workoutId, token);
      setWorkoutProgress(data);
    } catch (err) {
      console.error("Ошибка при получении прогресса тренировки:", err);
    }
  };

  const saveProgress = async (courseId: string, workoutId: string, token: string, progressData: number[]) => {
    try {
      await saveWorkoutProgress(courseId, workoutId, token, progressData);
      await getUserCourseProgress(courseId, token);
    } catch (err) {
      console.error(err);
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
        getUserCourses,
        getWorkouts,
        workouts,
        getWorkoutData,
        workout,
        currentCourseName,
        getUserCourseProgress,
        courseProgress,
        getUserWorkoutProgress,
        workoutProgress,
        currentCourseId,
        saveProgress,
      }}
    >
      {children}
    </CoursesContext.Provider>
  )
}
// import { CoursesContext } from "./CoursesContext";
// import { fetchCourses } from "../services/courses.ts"

// export const CoursesProvider = ({ children }) => {
//   // const { user } = useContext(AuthContext);
//   // const token = user?.token;

//   // const [isLoading, setIsLoading] = useState(false);
//   // const [tasks, setTasks] = useState([]);
//   // const [error, setError] = useState("");
//   // const [selectedDate, setSelectedDate] = useState(null);
//   // const [isDraggable, setIsDraggable] = useState(false);
//   // const [draggableCardId, setDraggableCardId] = useState(null);
//   // const [dragStartColumn, setDragStartColumn] = useState(null);

//   // const getCourses = useCallback(async () => {
//   const getCourses = async () => {
//     try {
//       // setIsLoading(true);
//       const data = await fetchCourses();
//       // console.log(data);
//       // if (data) setTasks(data);
//     } catch (err) {
//       // setError(err.message);
//     } finally {
//       // setIsLoading(false);
//     }
//   // }, [token]);


//   // useEffect(() => {
//   //   if (token) {
//   //     getTasks();
//   //   }
//   // }, [getTasks, token]);


//   // const addTask = async ({ newTask }) => {
//   //   setIsLoading(true);
//   //   try {
//   //     await postTask({ token, newTask })
//   //       .then((data) => {
//   //         setTasks(data);
//   //       })
//   //   } catch (err) {
//   //     setError(err.message);
//   //   } finally {
//   //     setIsLoading(false);
//   //   }
//   // };

//   // const updateTasks = (newTasks) => {
//   //   setTasks(newTasks);
//   // };

//   // const editTasks = async (token, id, task) => {
//   //   setIsLoading(true);
//   //   try {
//   //     await editTask(token, id, task)
//   //       .then((data) => {
//   //         setTasks(data);
//   //       })
//   //   } catch (err) {
//   //     setError(err.message);
//   //   } finally {
//   //     setIsLoading(false);
//   //   }
//   // };

//   // const deleteTasks = async (token, id) => {
//   //   setIsLoading(true);
//   //   try {
//   //     await deleteTask(token, id)
//   //       .then((data) => {
//   //         setTasks(data);
//   //       })
//   //   } catch (err) {
//   //     setError(err.message);
//   //   } finally {
//   //     setIsLoading(false);
//   //   }
//   // };

//   // const updateSelectedDate = (date) => {
//   //   setSelectedDate(date);
//   // };

//   // const updateTaskStatus = (taskId, newStatus) => {
//   //   setTasks(prevTasks => prevTasks.map(task => task._id === taskId ? { ...task, status: newStatus } : task))
//   // };


//   return (
//     <CoursesContext.Provider
//       value={{
//         // courses,
//         // setTasks,
//         // error, setError,
//         // isLoading, setIsLoading,
//         getCourses,
//         // addTask,
//         // token,
//         // updateTasks,
//         // editTasks,
//         // deleteTasks,
//         // selectedDate,
//         // updateSelectedDate,
//         // updateTaskStatus,
//         // isDraggable,
//         // setIsDraggable,
//         // draggableCardId,
//         // setDraggableCardId,
//         // dragStartColumn,
//         // setDragStartColumn
//       }}
//     >
//       {children}
//     </CoursesContext.Provider>
//   )
// }


import { useState, type ReactNode } from "react";
import { CoursesContext } from "./CoursesContext";
import { fetchCourses } from "../services/courses";
import type { CourseType } from "../types/types";


type CoursesProviderProps = {
  children: ReactNode;
};


export const CoursesProvider = ({ children }: CoursesProviderProps) => {
  const [courses, setCourses] = useState<CourseType[]>([]);


  const getCourses = async () => {
    try {
      const data = await fetchCourses();
      console.log(data);
      setCourses(data);
    } catch (err) {
      console.log("Ошибка при получении курсов: ", err);
    } finally {
      console.log("зашли finally");
    }
  };


  return (
    <CoursesContext.Provider
      value={{
        courses,
        getCourses
      }}
    >
      {children}
    </CoursesContext.Provider>
  )
}
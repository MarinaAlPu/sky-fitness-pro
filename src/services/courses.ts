import axios from "axios";
import type { CourseType } from "../types/types";


const API_URL = "https://wedev-api.sky.pro/api/fitness";


export type getUserCoursesReturnType = {
  email: string;
  selectedCourses: string[];
  user: {
    selectedCourses: string[];
  }
};

// export type getCourseWorkoutsReturnType = {
//   _id: string;
//   name: string;
//   video: string;
//   exercises: [];
// };

export type getCourseWorkoutsReturnType = getWorkoutReturnType[];

export type ExerciseType = {
  name: string;
  quantity: number;
  _id: string;
};

export type getWorkoutReturnType = {
  _id: string;
  name: string;
  video: string;
  exercises: ExerciseType[];
};

export type CourseProgressReturnType = {
  courseId: string,
  courseCompleted: boolean,
  workoutsProgress: WorkoutProgressReturnType[],
};

export type WorkoutProgressReturnType = {
  workoutId: string;
  workoutCompleted: boolean;
  progressData: number[];
};

export type SaveWorkoutProgressReturnType = {
  // пока непонятно
};

export type ResetWorkoutProgressReturnType = {
  message: string;
};


export const fetchCourses = (): Promise<CourseType[]> => {
  return axios.get<CourseType[]>(`${API_URL}/courses`)
    .then((resp) => {
      return resp.data;
    });
};

export const addCourse = (id: string, token: string): Promise<string> => {
  return axios.post(`${API_URL}/users/me/courses`,
    {
      courseId: id,
    }
    ,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": ""
      },
    })
    .then((resp) => {
      return resp.data;
    });
};

export const deleteCourse = (id: string, token: string): Promise<string> => {
  return axios.delete(`${API_URL}/users/me/courses/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": ""
      },
    })
    .then((resp) => {
      return resp.data;
    });
};

export const fetchUserCourses = (token: string): Promise<getUserCoursesReturnType> => {
  return axios.get<getUserCoursesReturnType>(`${API_URL}/users/me`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": ""
      },
    })
    .then((resp) => {
      return resp.data;
    });
};

export const getCourseWorkouts = (courseId: string, token: string): Promise<getCourseWorkoutsReturnType> => {
  return axios.get<getCourseWorkoutsReturnType>(`${API_URL}/courses/${courseId}/workouts`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": ""
      },
    }
  )
    .then((resp) => {
      return resp.data;
    });
};

export const getWorkout = (workoutId: string, token: string): Promise<getWorkoutReturnType> => {
  return axios.get<getWorkoutReturnType>(`${API_URL}/workouts/${workoutId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": ""
      },
    }
  )
    .then((resp) => {
      return resp.data;
    });
};

export const getCourseProgress = (courseId: string, token: string): Promise<CourseProgressReturnType> => {
  return axios.get<CourseProgressReturnType>(`${API_URL}/users/me/progress?courseId=${courseId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": ""
      },
    }
  )
    .then((resp) => {
      return resp.data;
    });
};

export const getWorkoutProgress = (courseId: string, workoutId: string, token: string): Promise<WorkoutProgressReturnType> => {
  return axios.get<WorkoutProgressReturnType>(`${API_URL}/users/me/progress?courseId=${courseId}&workoutId=${workoutId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": ""
      },
    }
  )
    .then((resp) => {
      return resp.data;
    });
};

export const saveWorkoutProgress = (courseId: string, workoutId: string, token: string, progressData: number[]): Promise<SaveWorkoutProgressReturnType> => {
  return axios.patch<SaveWorkoutProgressReturnType>(`${API_URL}/courses/${courseId}/workouts/${workoutId}`,
    {
      progressData: progressData,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": ""
      },
    }
  )
    .then((resp) => {
      return resp.data;
    });
};

export const resetWorkoutProgress = (courseId: string, workoutId: string, token: string): Promise<ResetWorkoutProgressReturnType> => {
  return axios.patch<ResetWorkoutProgressReturnType>(`${API_URL}/courses/:${courseId}/workouts/:${workoutId}/reset`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": ""
      },
    }
  )
    .then((resp) => {
      return resp.data;
    });
};

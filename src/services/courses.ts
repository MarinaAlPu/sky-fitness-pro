import axios from "axios";
import type { CourseType } from "../types/types";


const API_URL = "https://wedev-api.sky.pro/api/fitness";


export const fetchCourses = (): Promise<CourseType[]> => {
  return axios.get<CourseType[]>(`${API_URL}/courses`)
    .then((resp) => {
      // console.log("resp в функции fetchCourses: ", resp);
      return resp.data;
    });
};

export const addCourse = (id: string, token: string): Promise<any> => {
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
      console.log("resp в функции addCourse: ", resp);
      return resp.data;
    });
};

export const deleteCourse = (id: string, token: string): Promise<any> => {
  return axios.delete(`${API_URL}/users/me/courses/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": ""
      },
    })
    .then((resp) => {
      console.log("resp в функции deleteCourse: ", resp);
      return resp.data;
    });
};


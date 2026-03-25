import axios from "axios";
import type { CourseType } from "../types/types";


const API_URL = "https://wedev-api.sky.pro/api/fitness";


export const fetchCourses = (): Promise<CourseType[]> => {
  return axios.get<CourseType[]>(`${API_URL}/courses`)
    .then((resp) => {
      console.log("resp в функции fetchCourses: ", resp);
      return resp.data;
    });
};

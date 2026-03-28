import axios from "axios";


const API_URL = "https://wedev-api.sky.pro/api/fitness";


export type UserDataType = {
  email: string;
  password: string;
};


export async function registration(userData: UserDataType) {
  try {
    const data = await axios.post(`${API_URL}/auth/register`, userData, {
      headers: {
        "Content-Type": "",
      },
    });
    // console.log("data: ", data.data);
    return data.data;
  } catch (error) {
    // console.log(error);
    // throw new Error(error.response.data.message);
    // throw new Error(error);
    throw error;
  }
};

export async function login(userData: UserDataType) {
  try {
    const data = await axios.post(`${API_URL}/auth/login`, userData, {
      headers: {
        "Content-Type": "",
      },
    });
    // console.log("data: ", data.data);
    return data.data;
  } catch (error) {
    throw error;
  }
};

import { Main } from "../components/main/Main";
import { Outlet } from "react-router-dom";


export const MainPage = () => {
  return (
    <>
      <Main />
      <Outlet />
    </>
  )
}

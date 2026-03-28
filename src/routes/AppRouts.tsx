import { Routes, Route } from "react-router-dom";
// import { PrivateRoute } from "./PrivateRoute.tsx";
import { MainPage } from "../pages/Main.tsx";
import { CoursePage } from "../pages/CoursePage.tsx";
import { NotFoundPage } from "../pages/NotFoundPage.tsx";
import { WorkoutPage } from "../pages/WorkoutPage.tsx";
import { ProfilePage } from "../pages/ProfilePage.tsx";
import { LoginPage } from "../pages/LoginPage.tsx";
import { RegistrationPage } from "../pages/RegistrationPage.tsx";
import { ModalPage } from "../pages/modalPage.tsx";
import { Layout } from "../components/layout/Layout.tsx";


export function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}> {/* Чтобы форма авторизации отображалась над MainPage и CoursePage */}
        <Route path="/" element={<MainPage />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="registration" element={<RegistrationPage />} />
        </Route>

        <Route path="/course/:id" element={<CoursePage />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="registration" element={<RegistrationPage />} />
        </Route>
      </Route>


      {/* <Route element={<PrivateRoute />}> */}
      {/* <Route path="/workout/:id" element={<WorkoutPage />} /> */}
      <Route path="/workout/1" element={<WorkoutPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      {/* </Route> */}

      <Route path="/modal" element={<ModalPage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

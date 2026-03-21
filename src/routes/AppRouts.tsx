import { Routes, Route } from "react-router-dom";
// import { PrivateRoute } from "./PrivateRoute.tsx";
import { MainPage } from "../pages/Main.tsx";
import { CoursePage } from "../pages/CoursePage.tsx";
import { NotFoundPage } from "../pages/NotFoundPage.tsx";
import { WorkoutPage } from "../pages/WorkoutPage.tsx";
import { ProfilePage } from "../pages/ProfilePage.tsx";
import { LoginPage } from "../pages/LoginPage.tsx";
import { RegistrationPage } from "../pages/RegistrationPage.tsx";


export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      {/* <Route path="/course/:id" element={<CoursePage />} /> */}
      <Route path="/course/1" element={<CoursePage />} />

      <Route path="/login" element={<LoginPage />} />
      <Route path="/registration" element={<RegistrationPage />} />
      <Route path="*" element={<NotFoundPage />} />

      {/* <Route element={<PrivateRoute />}> */}
        {/* <Route path="/workout/:id" element={<WorkoutPage />} /> */}
        <Route path="/workout/1" element={<WorkoutPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      {/* </Route> */}
    </Routes>
  )
}

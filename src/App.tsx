import { GlobalStyle } from './assets/GlobalStyles';
import { AuthProvider } from './context/AuthProvider';
import { CoursesProvider } from './context/CoursesProvider';
import { AppRoutes } from './routes/AppRouts';


function App() {
  return (
    <>
      <GlobalStyle />
      <AuthProvider>
        <CoursesProvider>
          <AppRoutes />
        </CoursesProvider>
      </AuthProvider>
    </>
  )
}

export default App

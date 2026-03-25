import { GlobalStyle } from './assets/GlobalStyles';
import { CoursesProvider } from './context/CoursesProvider';
// import { Main } from './components/main/Main';
import { AppRoutes } from './routes/AppRouts';


function App() {
  return (
    <>
      <GlobalStyle />
      {/* <Main /> */}
      <CoursesProvider>
        <AppRoutes />
      </CoursesProvider>
    </>
  )
}

export default App

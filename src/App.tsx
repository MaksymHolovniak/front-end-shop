import Header from "./components/Header/Header.tsx";
import StyledConfigProvider from "./components/common/ConfigProvider/ConfigProvider.tsx";
import {Route, Routes} from "react-router-dom";
import MainPage from "./components/MainPage/MainPage.tsx";
function App() {


  return (

    <>
      <main>
        <StyledConfigProvider>
          <Header />
          <Routes>
              <Route path='/' element={<MainPage />}></Route>
          </Routes>
        </StyledConfigProvider>
      </main>
    </>
  )
}

export default App

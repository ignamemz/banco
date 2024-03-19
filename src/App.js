import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/home"
import Main from "./screens/main";

const App = () => {

  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="main" element={ <Main/> } />
        <Route path="home" element={ <Home/> } />
      </Routes>

    </BrowserRouter>
  )
}

export default App;

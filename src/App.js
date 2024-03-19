import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/home"
import Main from "./screens/main";
import Transfer from "./screens/transfer";
import LoadingScreen from "./screens/loadingScreen";

const App = () => {

  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/main" element={ <Main/> } />
        <Route path="/transfer" element={ <Transfer/> } />
        <Route path="/loadingScreen" element={ <LoadingScreen/> } />
      </Routes>

    </BrowserRouter>
  )
}

export default App;

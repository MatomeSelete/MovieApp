import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// import { Home, NavBar, Notification} from "./components";

import Welcome from "./componets/Welcome/Welcome";
import Home from "./componets/Home/Home";
import NavBar from "./Navigation/NavBar/NavBar";
import SideBar from "./Navigation/SideBar/SideBar";

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}

      {/* 
      {/* <Home />
      <SideBar />  */}

      <BrowserRouter>
        <NavBar />
        <SideBar />
        <Routes>
          <Route path="" element={<Home />}> </Route>

          <Route path="/friends" element={ <Welcome /> }> </Route>

          {/* <Route path="groups" element={<Groups />}></Route> */}

          {/* <Route path="notification" element={<Notification />}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

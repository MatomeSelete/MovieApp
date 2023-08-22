import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// import { Home, NavBar, Notification} from "./components";

import {Home, Welcome } from "./componets";
import {MovieHome, Movies, TVshows } from "../src/componets/Home";
import NavBar from "./componets/Navigation/NavBar/NavBar";
// import SideBar from "./Navigation/SideBar/SideBar";

function App() {
  return (
    <div className="App">
     

      <BrowserRouter>
        <NavBar />
        {/* <SideBar /> */}
        <Routes>
          <Route path="" element={ <Welcome />}> </Route>

          <Route path="" element={ <Home /> }> 
          <Route path="/moviehome" element={<MovieHome />}> </Route>
          <Route path="/Movies" element={<Movies />}> </Route>
          <Route path="/TVshows" element={<TVshows />}> </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

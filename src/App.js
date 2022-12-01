import React from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import "./sass/main.scss";
import "@progress/kendo-theme-default/dist/all.css";


// Pages
import LoginPage from "./pages/Login/LoginPage";
import SchedulePage from "./pages/Schedule/SchedulePage";
import Page404 from "./pages/404/Page404";

function App() {
  return (
    <Routes>
      <Route exact path='/login' element={<LoginPage/>} />
      <Route path='/' element={<SchedulePage/>} />
      {/* <Route path='/profile' element={<ProfilePage/>} />
      <Route path='/notification' element={<NotificationPage/>} />
      <Route path='/dashboard/blender/:machineID' element={<Blender/>} />
  <Route path='/dashboard/3dprinter/:machineID' element={<Printer3D/>} /> */}
      <Route path="*" element={<Page404/>} /> 
    </Routes>
  );
}

export default App;

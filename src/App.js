// import logo from './logo.svg';
import React, { useRef } from "react";
import Main from './components/Main';
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Register from './components/UserRegister';
import FindIdPage from './components/FindId';
import FindPwPage from './components/FindPassword';
import ChangePwPage from './components/ChangePw';
import LeaveIdPage from './components/LeaveId';

function App() {
  return (
    <>
    <Header></Header>
      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/findid" element={<FindIdPage />}></Route>
        <Route path="/findpassword" element={<FindPwPage />}></Route>
        <Route path="/changepassword" element={<ChangePwPage />}></Route>
        <Route path="/leaveid" element={<LeaveIdPage />}></Route>
      </Routes>
      {/* <UserRegister></UserRegister> */}
    </>
  );
}

export default App;

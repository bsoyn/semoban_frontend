// import logo from './logo.svg';
import React, { useRef } from "react";
import Main from './components/Main';
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import FindIdPage from './components/FindId';
import FindPwPage from './components/FindPassword';
import ChangePwPage from './components/ChangePw';
import LeaveIdPage from './components/LeaveId';
import RequestRegister from './components/RequestRegister';
import Login from './components/Login';
import UpdateMember from './components/UpdateMember';

function App() {
  return (
    <>
    <Header></Header>
      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
        <Route path="/register" element={<RequestRegister />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/updatemem" element={<UpdateMember />}></Route>
        <Route path="/findid" element={<FindIdPage />}></Route>
        <Route path="/findpassword" element={<FindPwPage />}></Route>
        <Route path="/changepassword" element={<ChangePwPage />}></Route>
        <Route path="/leaveid" element={<LeaveIdPage />}></Route>
      </Routes>
    </>
  );
}

export default App;

// import logo from './logo.svg';
import React, { useRef } from "react";
import Main from './Pages/Main';
import Header2 from "./Components/Header2";
import { Route, Routes } from "react-router-dom";
import FindIdPage from './Pages/FindId';
import FindPwPage from './Pages/FindPassword';
import ChangePwPage from './Pages/ChangePw';
import LeaveIdPage from './Pages/LeaveId';
import RequestRegister from './Pages/RequestRegister';
import Login from './Pages/Login';
import UpdateMember from './Pages/UpdateMember';
import Board from './Pages/FreeBoard';

function App() {
  return (
    <>
    <Header2></Header2>
      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
        <Route path="/register" element={<RequestRegister />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/updatemem" element={<UpdateMember />}></Route>
        <Route path="/findid" element={<FindIdPage />}></Route>
        <Route path="/findpassword" element={<FindPwPage />}></Route>
        <Route path="/changepassword" element={<ChangePwPage />}></Route>
        <Route path="/leaveid" element={<LeaveIdPage />}></Route>
        <Route path="/freeboard" element={<Board />}></Route>
      </Routes>
    </>
  );
}

export default App;

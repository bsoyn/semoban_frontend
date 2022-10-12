// import logo from './logo.svg';
import React, { useRef } from "react";
import Main from './components/Main';
import Header from "./components/Header";
import UserRegister from "./components/UserRegister";
import { Route, Routes } from "react-router-dom";
import Register from './components/UserRegister';
import FindIdPage from './components/FindId';

function App() {
  return (
    <>
    <Header></Header>
      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/findid" element={<FindIdPage />}></Route>
      </Routes>
      {/* <UserRegister></UserRegister> */}
    </>
  );
}

export default App;

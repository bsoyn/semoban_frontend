import React, {Component} from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Register from './UserRegister';


function Nonmember() {
    
}

function Main() {
    return(
        <div className='main'>
            <Link to='/register'>회원가입</Link>
            <Link to='/findid'>아이디찾기</Link>
            <Link to='/findpassword'>비밀번호찾기</Link>
            <Link to='/changepassword'>비밀번호변경</Link>
            <Link to='/leaveid'>회원탈퇴</Link>
        </div>
    )
}

export default Main;
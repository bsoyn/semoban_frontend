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
        </div>
    )
}

export default Main;
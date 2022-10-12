import React, {Component} from 'react';
import'../css/register.css';
import Main from './Main';
import {useState, useEffect, useCallback} from 'react';
import axios from 'axios';

function requestRegister () {
    return axios({
        url:'/member/register',
        method:'post',
        data:{
            userId: "",
            userPw: ""
        }
    }) 
}


function Register () {
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");
    const [pw_check, setPwCheck ] = useState("");
    const [name, setName] = useState("");
    const [birth, setBirth]= useState("");
    const [email, setEmail] = useState("");
    const [keyword, setKeyword] = useState("");

    const onIdHandler = (event) => {
        setId(event.currentTarget.value);
        console.log({id});
    };

    const onPwHandler = (event) => {
        setPw(event.currentTarget.value);
    };

    const onPwCheckHandler = (event) => {
        setPwCheck(event.currentTarget.value);
    };

    const onNameHandler = (event) => {
        setName(event.currentTarget.value);
    };

    const onBirthHandler = (event) => {
        setBirth(event.currentTarget.value);
    };

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value);
    };

    const onKeywordHandler = (event) => {
        setKeyword(event.currentTarget.value);
    };

    const onRegister = (event) => {
        try {
            let res = axios({
                method:"post",
                url:"/register",
                data:{
                    userId: {id},
                    password: {pw},
                    userName: {name},
                    dateOfBirth: {birth},
                    email: {email},
                    interestKeywords: {keyword}
                },
            });
            console.log(res);
            document.write(JSON.stringify(res));
        }catch (err) {
            
        }
    }

    const requestRegister = () => {
        const url = "https://reqres.in/api/register";
        const email = document.getElementById("email").value;
        const pw = document.getElementById("pw").value;

        axios(url,{},{
            userId: {id},
            "password": {pw},
            userName: {name},
            dateOfBirth: {birth},
            "email": {email},
            interestKeywords: {keyword}
        })
        .then(function (res){
            console.log("success");
            console.log(res);
        })
        .catch(function (error) {
            console.log("fail");
            console.log(error);
            throw new Error(error);
        })
        .then(function(){

        });
    }

    return(
        <div className='input_page'>
            <h2>회원가입</h2>
            {/* <form action='/' method='post'> */}
                <div className='input'>
                    <div className='input_content'>
                        <div className='input_what'><label for="id">아이디</label></div>
                        <span className='input_area'><input type="text" id="id" className='write' onChange={onIdHandler}></input></span>
                    </div>
                    <div className='input_content'>
                        <div className='input_what'><label for="pw">비밀번호</label></div>
                        <span className='input_area'><input type="password" id="pw" className='write' onChange={onPwHandler}></input></span>
                    </div>
                    <div className='input_content'>
                        <div className='input_what'><label for="pw_check">비밀번호 확인</label></div>  
                        <span className='input_area'><input type="password" id="pw_check" className='write' onChange={onPwCheckHandler}></input></span>
                    </div>
                    <div className='input_content'>
                        <div className='input_what'><label for="name">이름</label></div>
                        <span className='input_area'><input type="text" id="name" className='write' onChange={onNameHandler}></input></span>
                    </div>
                    <div className='input_content'>
                        <div className='input_what'><label for="birth">생년월일</label></div>
                        <span className='input_area'><input id="birth" type="date" onChange={onBirthHandler}></input></span>
                    </div>
                    <div className='input_content'>
                        <div className='input_what'><label for="email">이메일</label></div>
                        <span className='input_area'><input type="email" id="email" className='input_text' onChange={onEmailHandler}></input></span>
                    </div>
                    <div className='input_content'>
                        <div className='input_what'><label for="keyword">관심키워드</label></div>
                        <span className='input_area'><input type="text" id="keyword" onChange={onKeywordHandler}></input></span>
                    </div>
                    
                    <input id="button" type="submit" value="회원가입" onClick={requestRegister}></input>
                </div>
            {/* </form> */}
        </div>
    )
}

export default Register;
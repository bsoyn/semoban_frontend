import axios from 'axios';
import React, { Component, useEffect, useState, useCallback } from 'react';
import '../css/register.css';



function FindIdPage () {
    
    const [userName, setUserName] = useState();
    const [userBirth, setUserBirth] = useState();
    const [userEmail, setUserEmail] = useState();

    const onNameHandler = (event) =>{
        setUserName(event.currentTarget.value);
    }

    const onBirthHandler = (event) =>{
        setUserName(event.currentTarget.value);
    }

    const onEmailHandler = (event) =>{
        setUserName(event.currentTarget.value);
    }

    const onFindidHandler = (event) => {
        return axios({
            method:"Post",
            url:"/Main",
            data:{
                name: {userName},
                birth: {userBirth},
                email: {userEmail}
            }

        })
    }

    const requestFindid = (event) => [
        onFindidHandler(()=>{
            onFindidHandler.then((res)=>{

            })
        })
    ]

    return(
        <div className='input_page'>
            <h2>아이디 찾기</h2>
            <form action='' method='post'>
                <div className='input'>
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
                    
                    <input id="button" type="submit" value="아이디 찾기" onClick={requestFindid}></input>
                </div>
            </form>
        </div>
    )
}

export default FindIdPage;
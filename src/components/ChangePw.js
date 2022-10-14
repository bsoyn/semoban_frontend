import axios from 'axios';
import React, { Component, useEffect, useState, useCallback } from 'react';
import '../css/register.css';


function ChangePwPage () {
    const [oldPw, setOldPw] = useState();
    const [newPw, setNewPw] = useState();

    const onOldPwHandler = (event) => {
        setOldPw(event.currentTarget.value);
    }
    
    const onNewPwHandler = (event) => {
        setNewPw(event.currentTarget.value);
    }

    const requestChangePw = (event) => {

        axios({
            method:"POST",
            url: "",
            data:{
                "password": {oldPw},
                "password": {newPw}
            }
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


    return (
        <div className='input_page'>
            <h2>비밀번호 변경</h2>
            <div className='input'>
                <div className='input_content'>
                    <div className='input_what'><label for="name" className='form-label'>기존 비밀번호</label></div>
                    <span className='input_area'><input type="password" id="oldPw" className='write form-control' onChange={onOldPwHandler}></input></span>
                </div>
                <div className='input_content'>
                    <div className='input_what'><label for="email" className='form-label'>새 비밀번호</label></div>
                    <span className='input_area'><input type="password" id="newPw" className='write form-control' onChange={onNewPwHandler}></input></span>
                </div>
                    
                <input id="button" type="submit" value="비밀번호 변경" class="btn btn-success" onClick={requestChangePw}></input>
            </div>
        </div>
    )

}

export default ChangePwPage;
import axios from 'axios';
import React, { Component, useEffect, useState, useCallback } from 'react';
import '../css/register.css';


function LeaveIdPage () {
    const [pw, setPw] = useState();

    const onPwHandler = (event) => {
        setPw(event.currentTarget.value);
    }


    const requestLeavdId = (event) => {
        axios({
            method:"POST",
            url: "",
            data:{
                "password": {pw}
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
            <h2>회원 탈퇴</h2>
            <div className='input'>
                <div className='input_content'>
                    <div className='input_what'><label for="name" className='form-label'>비밀번호</label></div>
                    <span className='input_area'><input type="password" id="pw" className='write form-control' onChange={onPwHandler}></input></span>
                </div>
                    
                <input id="button" type="submit" value="회원 탈퇴" class="btn btn-success" onClick={requestLeavdId}></input>
            </div>
        </div>
    )

}

export default LeaveIdPage;
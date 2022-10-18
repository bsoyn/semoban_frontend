import axios from 'axios';
import React, { Component, useEffect, useState, useCallback } from 'react';
import '../css/register.css';


function LeaveIdPage () {
    const [pw, setPw] = useState();

    const onPwHandler = (event) => {
        setPw(event.currentTarget.value);
    }


    const requestLeavdId = (event) => {
        
        const token = sessionStorage.getItem('accessToken');
        axios({
            method:"delete",
            url: "/member/leaveId",
            headers: {
                Authorization: `Bearer ${token}`
            },
            data:{
                "password": {pw}
            }
        })
        .then(function (res){
            return res.data.responseData.redirect;
        }).then((res) => {
            window.location = `${res}`;
        })
        .catch(function (err) {
            if (err.response) {
                console.log(err.response.data);
                console.log(err.response.status);
                console.log(err.response.header);
            }
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
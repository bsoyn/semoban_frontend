import React, {Component} from 'react';
import '../css/header.css';
import { useEffect, useState } from 'react';
import Dropdown from './Dropdown';
import {AiFillBell} from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import logo from '../semobanlogo_3.png';

function Notice (props) {

    const [isClicked, setIsClicked] = useState(false);

    return(
        <div className='icon notice'>
            <AiFillBell size={24} ></AiFillBell>
        </div>
    )
}

function Member (props) {
    const [isClicked, setIsClicked] = useState(false);

    return(
        <div className='icon member'>
            <BsFillPersonFill size={24} data-toggle="dropdown"></BsFillPersonFill>
            <ul class="dropdown-menu" role="menu">
                <li>회원정보 수정</li>
                <li>로그아웃</li>
            </ul>
        </div>
    )
}

function BoardMenu (props) {
    const [ishover, setIshover] = useState(false);

    const list = [];
    list.push(
        <div className='head_menu'>
            <div onClick={e=>setIshover(!ishover)} className='menu_name'>
                게시판
            </div>
            <Dropdown visibility={ishover}>
                <ul className='boardmenu menu_content'>
                    <li className='board_1 li_menu'>자유 게시판</li>
                    <li className='board_2 li_menu'>정보공유 게시판</li>
                    <li className='board_3 li_menu'>질문 게시판</li>
                    <li className='board_4 li_menu'>자랑 게시판</li>
                </ul>
            </Dropdown>
        </div>
    )

    return list;
}

function NewsMenu(props) {
    const [ishover, setIshover] = useState(false);

    const list = [];
    list.push(
        <div className='head_menu'>
            <div onClick={e=>setIshover(!ishover)} className='menu_name'>
                뉴스
            </div>
            <Dropdown visibility={ishover}>
                <ul className='newsmenu menu_content'>
                    <li className='news_1 li_menu'>영상자료 게시판</li>
                    <li className='news_2 li_menu'>기사자료 게시판</li>
                </ul>
            </Dropdown>
        </div>
    )

    return list;
};

function MemberActivityMenu(props) {
    const [ishover, setIshover] = useState(false);

    const list = [];
    list.push(
        <div className='head_menu'>
            <div onClick={e=>setIshover(!ishover)} className='menu_name'>
                나의 활동
            </div>
            <Dropdown visibility={ishover}>
                <ul className='menu_content actmenu'>
                    <li className='memact_1 li_menu'>작성한 게시글 목록</li>
                    <li className='memact_2 li_menu'>작성한 댓글 목록</li>
                    <li className='memact_3 li_menu'>좋아요한 게시글 목록</li>
                </ul>
            </Dropdown>
        </div>
    )

    return list;
};


function Header () {
    
    return (
        <div className='header'>
            
            <div className='icon_menu'>
                <div className='icon_area'>
                    <Notice></Notice>
                </div>
                <div className='icon_area'>
                <Member></Member>
                </div>
                
            </div>
            <div className='head_menus'>
                <img src={logo} className='logo_header'></img>
                <BoardMenu></BoardMenu>
                <NewsMenu></NewsMenu>
                <MemberActivityMenu></MemberActivityMenu>
            </div>
        </div>
    )
}


export default Header;

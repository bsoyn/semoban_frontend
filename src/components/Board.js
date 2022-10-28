import React, {useEffect, useState, useRef } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';


function Board (props) {
    const [info, setInfo] = useState([]);
    const [selected, setSelected] = useState('');
    const [modalOn, setModalOn] = useState(false);

    const nextId = useRef(11);

    useEffect(()=>{
        
    }, []);

    
    return (
        <Table striped bordered hover>
            <div className=''></div>
                <thead>
                    <tr className=''>
                        <th></th>
                        <th>게시글 제목</th>
                        <th>작성자</th>
                        <th>작성일</th>
                        <th>조회수</th>
                        <th>추천수</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className=''>
                        <th className=''></th>
                    </tr>
                </tbody>
        </Table>
    )
}

export default Board;
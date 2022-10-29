import React, {useEffect, useState, useRef } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import BoardHead from '../Components/Board/BoardHead';
import BodyContents from '../Components/Board/BoardBody';
import Pagination from '../Components/Board/Pagination';
import '../css/board.css';
import { postList } from '../Data';


function Board () {
    const [posts, setPosts] = useState([]);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const offset = (page - 1) * limit;
    

    useEffect(()=>{
        setPosts(postList);
        console.log(offset);
    }, []);

    function ShowContents(){
        const list = [];
            posts.slice(offset,offset+limit).map((posts) => {
                console.log(posts)
                list.push(<BodyContents post={posts}></BodyContents>)
            }
            ,console.log(offset)
            )
            return list;
    };
    
    return (
        <>
        <h2>자유 게시판</h2>

        <main>
        <Table striped bordered hover>
            <div className=''></div>
                <BoardHead></BoardHead>
                <tbody>
                    <ShowContents></ShowContents>
                </tbody>
        </Table>
        </main>
        <Pagination total={posts.length} limit={limit} page={page} setPage={setPage}></Pagination>
        </>
    );
}

export default Board;
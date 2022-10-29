import {React} from 'react';
import { useState } from 'react';
import '../../css/board.css';

function BodyContents(props) {
    const [postId, setPostId] = useState(props.post.postId);
    const [postTitle, setPostTitle] = useState(props.post.postTitle);
    const [postWriter, setPostWriter] = useState(props.post.postWriter);
    const [postDate, setPostDate] = useState(props.post.postDate);
    const [postHit, setPostHit] = useState(props.post.postHit);
    const [postLikehit, setPostLikehit] = useState(props.post.postLikehit);

    return (
        <tr>
            <th className='post_id'>{postId}</th>
            <th className='post_title'>{postTitle}</th>
            <th className='post_writer'>{postWriter}</th>
            <th className='post_date'>{postDate}</th>
            <th className='post_hit'>{postHit}</th>
            <th className='post_likehit'>{postLikehit}</th>
        </tr>
    )
}

// function BoardBody (props){
//     const MaxNum = 10;
//     const posts = this.props.posts;
//     const content = [];
//     if(props.length<MaxNum){
//         MaxNum=props.length;
//     }
//     for (let i=0; i<MaxNum; i++){
//         content.add(<BodyContents post={posts[i]} />);
//     }


//     return(
//         {content}
//     )
// }

export default BodyContents;
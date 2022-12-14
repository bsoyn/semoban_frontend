const postList = [
    {
        postId:1,
        postTitle:'임시게시글1',
        postWriter:'사용자1',
        postDate:'2022-10-10',
        postHit:'0',
        postLikehit:'0'
    },
    {
        postId:2,
        postTitle:'임시게시글2',
        postWriter:'사용자2',
        postDate:'2022-10-10',
        postHit:'0',
        postLikehit:'0'
    },
    {
        postId:3,
        postTitle:'임시게시글3',
        postWriter:'사용자3',
        postDate:'2022-10-10',
        postHit:'0',
        postLikehit:'0'
    },
    {
        postId:4,
        postTitle:'임시게시글4',
        postWriter:'사용자4',
        postDate:'2022-10-10',
        postHit:'0',
        postLikehit:'0'
    },
    {
        postId:5,
        postTitle:'임시게시글5',
        postWriter:'사용자5',
        postDate:'2022-10-10',
        postHit:'0',
        postLikehit:'0'
    },
    {
        postId:6,
        postTitle:'임시게시글6',
        postWriter:'사용자6',
        postDate:'2022-10-10',
        postHit:'0',
        postLikehit:'0'
    },
    {
        postId:7,
        postTitle:'임시게시글7',
        postWriter:'사용자7',
        postDate:'2022-10-10',
        postHit:'0',
        postLikehit:'0'
    },
    {
        postId:8,
        postTitle:'임시게시글8',
        postWriter:'사용자8',
        postDate:'2022-10-10',
        postHit:'0',
        postLikehit:'0'
    },
    {
        postId:9,
        postTitle:'임시게시글9',
        postWriter:'사용자9',
        postDate:'2022-10-10',
        postHit:'0',
        postLikehit:'0'
    },
    {
        postId:10,
        postTitle:'임시게시글10',
        postWriter:'사용자10',
        postDate:'2022-10-10',
        postHit:'0',
        postLikehit:'0'
    },
    {
        postId:11,
        postTitle:'임시게시글11',
        postWriter:'사용자11',
        postDate:'2022-10-09',
        postHit:'1',
        postLikehit:'0'
    },
    {
        postId:12,
        postTitle:'임시게시글12',
        postWriter:'사용자12',
        postDate:'2022-10-08',
        postHit:'2',
        postLikehit:'0'
    },
];

const getPostByNo = no => {
    const array = postList.filter(x => x.no == no);
    if (array.length==1) {
        return array[0];
    }
    return null;
}

export {
    postList,
    getPostByNo
}
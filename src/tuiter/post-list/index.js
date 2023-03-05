import React from "react";
import postsArray from './posts.json';
import PostListItem from "./post-list-item";

const PostList = () => {
    return(
        <ul className='list-group'>
            {
                postsArray.map(post => <PostListItem post={post}/>)
            }
        </ul>
    );
};
export default PostList;
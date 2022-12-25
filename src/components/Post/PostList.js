import React, { useState, useEffect } from 'react'
import Post from '../Post/Post'
import PostForm from '../Post/PostForm';
import "./Post.css";


function PostList(props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [postList, setPostList] = useState([]);

    useEffect(() => {

        fetch("/posts")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setPostList(result)
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div> Error!!!</div>
    } else if (!isLoaded) {
        return <div>Loading...</div>
    } else {
        return (
            <div >
                <PostForm key={58} userId={1} userName={1} title={"adsda"} text={"sada"} />
                {postList.reverse().map(posts => (
                    <Post key={posts.id} userId={posts.userId} userName={posts.userName} title={posts.title} text={posts.text} date={posts.date} ></Post>
                ))}
            </div>
        )
    }

}

export default PostList
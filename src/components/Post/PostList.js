import React, { useState, useEffect } from 'react';
import Post from '../Post/Post';
import PostForm from '../Post/PostForm';
import './Post.css';

const PostList = () => {
  const [isError, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    fetch('/posts')
      .then(res => res.json())
      .then(
        result => {
          setIsLoading(true);
          setPostList(result);
        },
        error => {
          setIsLoading(true);
          setError(error);
        }
      );
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div> Error!!!</div>;
  }

  return (
    <div>
      <PostForm
        key={58}
        userId={1}
        userName={1}
        title={'adsda'}
        text={'sada'}
        setPostList={setPostList}
      />
      {postList.reverse().map(posts => (
        <Post
          key={posts.id}
          userId={posts.userId}
          userName={posts.userName}
          title={posts.title}
          text={posts.text}
          date={posts.date}
        ></Post>
      ))}
    </div>
  );
};

export default PostList;

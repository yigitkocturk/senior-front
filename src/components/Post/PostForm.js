import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './Post.css';

function PostForm({ userId, userName, setPostList }) {
  const [text, setText] = useState('');
  const [title, setTitle] = useState('');

  const savePost = () => {
    fetch('/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: title,
        userId: userId,
        text: text,
        userName: userName,
      }),
    }).then(fetch('/posts').then(res => setPostList(res.json())));
  };

  const handleSubmit = () => {
    savePost();
  };
  const handleTitle = value => {
    setTitle(value);
  };

  const handleText = value => {
    setText(value);
  };

  return (
    <div className='container'>
      <Card sx={{ maxWidth: 750 }}>
        <CardContent>
          <Typography variant='body2' color='text.secondary'>
            <input
              className='form-control inputt'
              type='title'
              placeholder='title'
              onChange={e => handleTitle(e.target.value)}
            ></input>
            <input
              className='form-control inputt'
              type='text'
              placeholder='text'
              onChange={e => handleText(e.target.value)}
            ></input>
            <button type='button' className='button1' onClick={handleSubmit}>
              Share
            </button>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default PostForm;

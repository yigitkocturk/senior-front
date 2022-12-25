import React, { useState } from 'react';
import "./Post.css";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CommentIcon from '@mui/icons-material/Comment';

function PostForm(props) {
  const { userId, userName } = props;
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [expanded, setExpanded] = useState(false);

  const savePost = () => {
    fetch("/posts",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          userId: userId,
          text: text,
          userName: userName
        }),
      })
      .then((res) => res.json())
      .catch((err) => console.log("error"))
  }

  const handleSubmit = () => {
    savePost();
    window.location.reload(false);
  }
  const handleTitle = (value) => {
    setTitle(value);
  }

  const handleText = (value) => {
    setText(value);
  }

  return (
    <div className='container'>
      <Card sx={{ maxWidth: 750 }}>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            <input className='form-control inputt' type="title" placeholder='title' onChange={(e) => handleTitle(e.target.value)}></input>
            <input className='form-control inputt' type="text" placeholder='text' onChange={(e) => handleText(e.target.value)}></input>
            <button type="button" className="button1" onClick={handleSubmit}>Share</button>
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default PostForm
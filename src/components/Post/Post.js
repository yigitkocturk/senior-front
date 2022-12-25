
import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CommentIcon from '@mui/icons-material/Comment';
import "./Post.css"



export default function Post(props) {
  const { userName, userId } = props;
  const [expanded, setExpanded] = useState(false);
  const [liked, setLiked] = useState(false);
  
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleLike = () =>{
    setLiked(!liked);
  }

  return (
    <div className='container'>
      <Card sx={{ maxWidth: 750 }}>
        <CardHeader
          avatar={
            <a className='a' href={'/users/' + userId} >
              <Avatar sx={{ bgcolor: 'aliceblue[500]' }} aria-label="recipe">
                {userName.charAt(0).toUpperCase()}
              </Avatar>
            </a>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          subheader={props.date}
        />
        {props.userName}
        <CardContent>
          <Typography variant="body1" color="text.first">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.text}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
          onClick={handleLike}
          aria-label="add to favorites">
            <FavoriteIcon style={liked? {color: "red"} : null} />
          </IconButton>
          <IconButton aria-label="add to comment"
          onClick={handleExpandClick}
          aria-expanded={expanded}
          >
            <CommentIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
}
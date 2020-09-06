import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';

const PostDetail = () => {
    const {postId} = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    
    // Fetch of Posts
    useEffect(()=>{
       const urlPost = `https://jsonplaceholder.typicode.com/posts/${postId}`;
       fetch(urlPost)
       .then(res => res.json())
       .then(data => setPost(data))
    }, []);
    
    // Fetch of Comments
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
          .then(res => {
            setComments(res.data);
          })
      });
      const postStyle = {
          border: '1px solid purple',
          margin: '20px',
          padding: '20px',
          borderRadius: '20px'
      }
    return (
        <div>
            <h2 style={{color: '#f50057', textAlign: 'center'}}>Post Details of {postId}</h2>

            {/* Single Post */}
            <Grid container spacing={3}>
                <Grid item xs={2}></Grid>
                <Grid item xs={8} justify="center">
                  <div style={postStyle}>
                    <h4>{post.title}</h4>
                    <p>{post.body}</p>
                  </div>
                  {/* Single Post Comment */}
                 {
                    comments.map(comment => <Comment comment={comment}></Comment>)
                 }
                 </Grid>
                  <Grid item xs={2}></Grid>
               </Grid>
        </div>
    );
};

export default PostDetail;
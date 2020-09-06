import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const Post = (props) => {
    const {title, id} = props.post;
    const postStyle = {
        border: '1px solid purple',
        margin: '20px',
        padding: '20px',
        borderRadius: '20px'
    }
    return (
        <div>
            {/* Post List */}
            <Grid container spacing={3}>
                <Grid item xs={2}></Grid>
               <Grid item xs={8} justify="center" style={postStyle}>
                        <h4>{title}</h4>
                        <Link to={`/post/${id}`}><Button variant="contained" color="secondary">Read More</Button></Link>
               </Grid>
                <Grid item xs={2}></Grid>
             </Grid>
        </div>
    );
};

export default Post;
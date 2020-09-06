import React, { useState, useEffect } from 'react';
import Post from '../Post/Post';

const Home = () => {
    const [posts, setPosts] = useState([]);

    // Fetch of Posts
    useEffect(()=>{
       fetch('https://jsonplaceholder.typicode.com/posts')
       .then(res => res.json())
       .then(data => setPosts(data))
    }, [])
    return (
      // Home Pages posts
        <div>
          <h1 style={{color: '#f50057', textAlign: 'center'}}>Social Media</h1>
          {
            posts.map(post => <Post post={post}></Post>)
          }
        </div>
    );
};

export default Home;
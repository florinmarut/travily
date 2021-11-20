import axios from 'axios';
import PostsList from '../PostsList';
import { useEffect, useState } from 'react';
import  { Navigate  } from 'react-router-dom'

export const Feed = () => {
    const authToken = localStorage.getItem('authToken');
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios({
        method: 'get',
           url: 'http://localhost:5000/posts',
           headers: {
           authorization: 'Bearer ' + authToken
           }
           })
      .then((response) => {
        if(JSON.stringify(response.data) !== '{"name":"JsonWebTokenError","message":"jwt malformed"}')
           setPosts(response.data);
      })
      .catch((error) => {
        alert(error);
      });
    }, []);

    return (
        <div>
            <PostsList posts={posts}/>
        </div>
    )
}

export default Feed;
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Posts = () => {
    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        try {
            const response = await axios.get(
                'https://jsonplaceholder.typicode.com/posts'
            );
            setPosts(response.data);
        } catch (error) {
            alert(error);
        } finally {
            console.log(posts);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <div>
            {posts.map((post) => (
                <Link key={post.id} to={`/posts/${post.id}`}>
                    <li>{post.title}</li>
                </Link>
            ))}
        </div>
    );
};

export default Posts;

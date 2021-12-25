import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Post = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    const fetchPost = async () => {
        try {
            const response = await axios.get(
                `https://jsonplaceholder.typicode.com/posts/${id}`
            );
            setPost(response.data);
        } catch (error) {
            alert(error);
        }
    };

    useEffect(() => {
        fetchPost();
    }, [id]);

    return (
        <div>
            {post && (
                <>
                    <h1>{post.title}</h1> <h3>{post.body}</h3>
                    <Link to={`/posts/${id}/edit`}>Edit this post</Link>
                </>
            )}
        </div>
    );
};

export { Post };

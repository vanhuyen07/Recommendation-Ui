import React from 'react';
import './NewsFeed.css';

const NewsFeed = () => {
    const posts = [
        { id: 1, user: 'User 1', content: 'This is the first post' },
        { id: 2, user: 'User 2', content: 'This is the second post' },
    ];

    return (
        <div className="news-feed">
            {posts.map(post => (
                <div key={post.id} className="post">
                    <h4>{post.user}</h4>
                    <p>{post.content}</p>
                </div>
            ))}
        </div>
    );
};

export default NewsFeed;

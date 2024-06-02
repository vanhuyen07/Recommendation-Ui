import React from 'react';
import './Stories.css';

const Stories = () => {
    const storyData = [
        { id: 1, name: 'User 1', img: 'https://via.placeholder.com/150' },
        { id: 2, name: 'User 2', img: 'https://via.placeholder.com/150' },
        { id: 3, name: 'User 3', img: 'https://via.placeholder.com/150' },
    ];

    return (
        <div className="stories">
            {storyData.map(story => (
                <div key={story.id} className="story">
                    <img src={story.img} alt={story.name} />
                    <p>{story.name}</p>
                </div>
            ))}
        </div>
    );
};

export default Stories;

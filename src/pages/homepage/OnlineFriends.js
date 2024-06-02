import React from 'react';
import './OnlineFriends.css';

const OnlineFriends = () => {
    const friends = [
        { id: 1, name: 'Friend 1' },
        { id: 2, name: 'Friend 2' },
    ];

    return (
        <div className="online-friends">
            <h3>Online Friends</h3>
            <ul>
                {friends.map(friend => (
                    <li key={friend.id}>{friend.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default OnlineFriends;

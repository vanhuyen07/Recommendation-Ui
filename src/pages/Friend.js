import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Friend.css';

const Friend = () => {
    const [recommendations, setRecommendations] = useState([]);
    const [nodeRecommendations, setNodeRecommendations] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentTab, setCurrentTab] = useState('knn');
    const itemsPerPage = 5; // Adjust the number of items per page as needed

    const userId = JSON.parse(localStorage.getItem('user'))?.UserID || null;

    const fetchKnnRecommendations = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:5000/api/users/${userId}/knn_recommendations`);
            setRecommendations(response.data);
            setCurrentTab('knn');
        } catch (err) {
            console.error('Failed to fetch KNN recommendations', err);
        }
    };

    const fetchNodeSimilarityRecommendations = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:5000/api/users/${userId}/Node_recommendations`);
            setNodeRecommendations(response.data);
            setCurrentTab('node');
        } catch (err) {
            console.error('Failed to fetch Node Similarity recommendations', err);
        }
    };

    const handleAddFriend = (similarUserId) => {
        console.log(`Add friend with ID: ${similarUserId}`);
        // Implement the logic to add a friend
    };

    const handleRemoveRecommendation = (similarUserId, type) => {
        if (type === 'knn') {
            setRecommendations(recommendations.filter(rec => rec.SimilarUserID !== similarUserId));
        } else if (type === 'node') {
            setNodeRecommendations(nodeRecommendations.filter(rec => rec.SimilarUserID !== similarUserId));
        }
    };

    // Pagination logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentRecommendations = recommendations.slice(indexOfFirstItem, indexOfLastItem);
    const currentNodeRecommendations = nodeRecommendations.slice(indexOfFirstItem, indexOfLastItem);

    const handleNextPage = () => {
        if (currentPage < Math.ceil((currentTab === 'knn' ? recommendations.length : nodeRecommendations.length) / itemsPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    useEffect(() => {
        fetchKnnRecommendations();
    }, []); // Call only once on component mount

    return (
        <div className="friend-container">
            <div className="button-container">
                <button onClick={fetchKnnRecommendations}>Gợi ý KNN</button>
                <button onClick={fetchNodeSimilarityRecommendations}>Gợi ý Node_Similar</button>
                <button onClick={() => alert('bạn bè Clicked')}>bạn bè</button>
                <button onClick={() => alert('Lời mời kết bạn Clicked')}>Lời mời kết bạn</button>
            </div>

            {currentTab === 'knn' && recommendations.length > 0 && (
                <div className="recommendations-container">
                    <h3>KNN Recommendations</h3>
                    <div className="recommendations">
                        <ul>
                            {currentRecommendations.map(rec => (
                                <li key={rec.SimilarUserID} className="recommendation-item">
                                    <div className="avatar">
                                        <img src="https://cdn.tuoitre.vn/thumb_w/480/2020/4/23/tjvena7bnvijpzvq3fscpx-970-80-1587599428795869438770.jpg" alt="avatar" />
                                    </div>
                                    <div className="user-info">
                                        <p>{rec.SimilarUserName}</p>
                                        <button onClick={() => handleAddFriend(rec.SimilarUserID)}>Thêm bạn bè</button>
                                        <button className="delete-button"
                                                onClick={() => handleRemoveRecommendation(rec.SimilarUserID, 'knn')}>Xóa
                                        </button>

                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="pagination">
                        <button className="button-container" onClick={handlePreviousPage} disabled={currentPage === 1}>Previous</button>
                        <button className="button-container" onClick={handleNextPage} disabled={currentPage === Math.ceil(recommendations.length / itemsPerPage)}>Next</button>
                    </div>
                </div>
            )}

            {currentTab === 'node' && nodeRecommendations.length > 0 && (
                <div className="recommendations-container">
                    <h3>Node Similarity Recommendations</h3>
                    <div className="recommendations">
                        <ul>
                            {currentNodeRecommendations.map(rec => (
                                <li key={rec.SimilarUserID} className="recommendation-item">
                                    <div className="avatar">
                                        <img src="https://cdn.tuoitre.vn/thumb_w/480/2020/4/23/tjvena7bnvijpzvq3fscpx-970-80-1587599428795869438770.jpg" alt="avatar" />
                                    </div>
                                    <div className="user-info">
                                        <p>{rec.SimilarUserName}</p>
                                        <button className="button-container" onClick={() => handleAddFriend(rec.SimilarUserID)}>Thêm bạn bè</button>
                                        <button className="delete-button"
                                                onClick={() => handleRemoveRecommendation(rec.SimilarUserID, 'node')}>Xóa
                                        </button>

                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="pagination">
                        <button className="button-container" onClick={handlePreviousPage} disabled={currentPage === 1}>Previous</button>
                        <button className="button-container" onClick={handleNextPage} disabled={currentPage === Math.ceil(nodeRecommendations.length / itemsPerPage)}>Next</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Friend;

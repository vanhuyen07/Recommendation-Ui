import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './UserProfile.css';

const UserProfile = () => {
    const { userId } = useParams();
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate(); // Hook để điều hướng

    useEffect(() => {
        axios.get(`http://127.0.0.1:5000/api/users/${userId}`)
            .then(response => {
                setUser(response.data);
            })
            .catch(error => {
                setError('Không thể lấy thông tin người dùng');
                console.error(error);
            });
    }, [userId]);

    if (error) {
        return <p>{error}</p>;
    }

    if (!user) {
        return <p>Đang tải...</p>;
    }

    // Hàm xử lý khi nhấn nút chỉnh sửa
    const handleEditProfile = () => {
        navigate(`/edit-profile/${userId}`); // Điều hướng đến trang chỉnh sửa
    };

    return (
        <div className="user-profile">
            <img src={user.coverPhoto || 'https://phapluatxahoi.kinhtedothi.vn/stores/news_dataimages/2023/012023/18/12/in_article/d1a6d9d9d0b0af17028d58e2a1bfc59d.jpg?rt=20230118123308'} alt="Cover Photo" className="cover-photo" />
            <div className="profile-header">
                <img src={user.avatar || 'https://trungtamtienghan.edu.vn/uploads/blog/2019_08/cach-noi-con-meo-trong-tieng-han.jpg'} alt="Avatar" className="avatar" />
                <div className="profile-info">
                    <h2>{user.UserName}</h2>
                    <p>{user.bio}</p>
                </div>
            </div>
            <div className="profile-details">
                <p><strong>Giới tính:</strong> {user.Gender}</p>
                <p><strong>Ngày sinh:</strong> {user.DateOfBirth}</p>
                <p><strong>Thành phố:</strong> {user.City}</p>
                <p><strong>Quốc gia:</strong> {user.Country}</p>
                <p><strong>Sở thích:</strong> {user.Interests.join(', ')}</p>
            </div>
            <button className="edit-profile-btn" onClick={handleEditProfile}>Chỉnh sửa trang cá nhân</button>
        </div>
    );
};

export default UserProfile;

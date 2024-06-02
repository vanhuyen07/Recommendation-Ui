import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = ({ user, setUser }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem('user');
        navigate('/login');
    };

    return (
        <div className="header">
            <img
                src="https://freelogopng.com/images/all_img/1688663226threads-logo-png.png"
                alt="Thread Logo"
                className="logo"
                onClick={() => navigate('/')}
            />
            <div className="nav-links">
                <img
                    src="https://png.pngtree.com/png-vector/20190223/ourlarge/pngtree-vector-house-icon-png-image_695369.jpg"
                    alt="Home"
                    className="nav-icon"
                    onClick={() => navigate('/')}
                />
                <img
                    src="https://cdn3.iconfinder.com/data/icons/3-education-glyph-black/614/Search_User-512.png"
                    alt="Search"
                    className="nav-icon"
                    onClick={() => navigate('/search')}
                />
                <img
                    src="https://png.pngtree.com/png-vector/20191030/ourlarge/pngtree-article-content-writing-paper-storytelling-write-icon-for-web-png-image_1927643.jpg"
                    alt="Post"
                    className="nav-icon"
                    onClick={() => navigate('/post')}
                />
                <img
                    src="https://png.pngtree.com/element_our/png_detail/20181213/users-vector-icon-png_267459.jpg"
                    alt="Friend"
                    className="nav-icon"
                    onClick={() => navigate('/friend')}
                />
                <img
                    src="https://png.pngtree.com/png-clipart/20190629/original/pngtree-vector-user-management-icon-png-image_4101419.jpg"
                    alt="User Profile"
                    className="nav-icon"
                    onClick={() => navigate(`/user-profile/${user.UserID}`)}
                />
            </div>
            <div className="profile">
                <img
                    src="https://banner2.cleanpng.com/20180518/zle/kisspng-computer-icons-installation-computer-configuration-engineer-5afe7737e4b516.4273681315266261039368.jpg"
                    alt="Security"
                    className="profile-pic"
                    onClick={() => navigate('/security')}
                />
                {user && (
                    <button onClick={handleLogout}>Logout</button>
                )}
            </div>
        </div>
    );
};

export default Header;

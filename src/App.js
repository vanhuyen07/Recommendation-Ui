import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Search from './pages/Search';
import Post from './pages/Post';
import Friend from './pages/Friend';
import UserProfile from './pages/UserProfile';
import Security from './components/Security';
import Login from './components/Login';
import './App.css';

function App() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const loggedInUser = localStorage.getItem('user');
        if (loggedInUser) {
            setUser(JSON.parse(loggedInUser));
        }
    }, []);

    return (
        <Router>
            <div className="App">
                {user && <Header user={user} setUser={setUser} />}
                <Routes>
                    <Route path="/login" element={<Login setUser={setUser} />} />
                    {user ? (
                        <>
                            <Route path="/" element={<Home />} />
                            <Route path="/search" element={<Search />} />
                            <Route path="/post" element={<Post />} />
                            <Route path="/friend" element={<Friend />} />
                            <Route path="/user-profile/:userId" element={<UserProfile />} />
                            <Route path="/security" element={<Security />} />
                        </>
                    ) : (
                        <Route path="*" element={<Navigate to="/login" />} />
                    )}
                </Routes>
            </div>
        </Router>
    );
}

export default App;

import React from 'react';
import './Navbar.css';
import { AppBar, Toolbar, Typography, InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';

const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar className="navbar">
                <Typography variant="h6" noWrap>
                    Facebook
                </Typography>
                <div className="search">
                    <div className="search-icon">
                        <SearchIcon />
                    </div>
                    <InputBase
                        placeholder="Search…"
                        classes={{
                            root: 'input-root',
                            input: 'input-input',
                        }}
                    />
                </div>
                <div className="navbar-icons">
                    <IconButton color="inherit">
                        <HomeIcon />
                    </IconButton>
                    <IconButton color="inherit">
                        <NotificationsIcon />
                    </IconButton>
                    <IconButton color="inherit">
                        <AccountCircle />
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;

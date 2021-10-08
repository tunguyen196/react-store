import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Register from 'features/Auth/components/Register';
import Login from 'features/Auth/components/Login';
import { useDispatch, useSelector } from 'react-redux';
import { AccountCircle } from '@mui/icons-material';
import { Menu, MenuItem } from '@mui/material';
import { logout } from 'features/Auth/userSlice';



const MODE = {
    LOGIN: 'login',
    REGISTER: 'register',
}

export default function Header() {
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = useState(null); //menu
    const [mode, setMode] = useState(MODE.LOGIN);
    const [open, setOpen] = useState(false);
    const loggedUser = useSelector(state => state.user.current);
    const isLogged = !!loggedUser.id;
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    //dropdown profile
    const openMenu = Boolean(anchorEl);
    const handleClickMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    //logout
    const handleLogoutClick = () => {
        const action = logout();
        dispatch(action);
        handleCloseMenu();
    }

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            News
                        </Typography>
                        {!isLogged && <Button color="inherit" onClick={handleClickOpen}>Login</Button>}
                        {isLogged && (
                            <IconButton color="inherit" onClick={handleClickMenu}>
                                <AccountCircle />
                            </IconButton>
                        )}


                    </Toolbar>
                </AppBar>
            </Box>
            <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth disableEscapeKeyDown >
                <DialogContent>
                    {mode == MODE.REGISTER && (
                        <>
                            <Register closeDialog={handleClose} />

                            <Box textAlign="center">
                                <Button color="primary" onClick={() => setMode(MODE.LOGIN)}>
                                    Already have an account. Regiter here
                                </Button>
                            </Box>
                        </>
                    )}
                    {mode == MODE.LOGIN && (
                        <>
                            <Login closeDialog={handleClose} />

                            <Box textAlign="center">
                                <Button color="primary" onClick={() => setMode(MODE.REGISTER)}>
                                    Dont have an account. Regiter here
                                </Button>
                            </Box>
                        </>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                </DialogActions>
            </Dialog>

            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={openMenu}
                onClose={handleCloseMenu}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleCloseMenu}>Profile</MenuItem>
                <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
            </Menu>
        </>
    );
}

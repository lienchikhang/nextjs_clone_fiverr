import React, { useContext, useEffect, useState } from 'react'
import NavItemSelect from '../NavItemSelect'
import NavItem from '../NavItem'
// import { LanguageIcon } from '@heroicons/react/24/solid';
import cookies from 'js-cookie';
import NotiIcon from './NotiIcon';
import MessageIcon from './MessageIcon';
import { Avatar, Divider, IconButton, ListItemIcon, Menu, MenuItem, Tooltip } from '@mui/material';
import { Logout, Settings } from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import { Context } from '@/app/redux';

interface Props {
    showNavbar: boolean,
}

const HeaderNav: React.FC<Props> = ({ showNavbar }) => {

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [fullname, setFullname] = useState<string | null>(null);
    const [avatar, setAvatar] = useState<string | null>(null);
    const router = useRouter();
    const [state, dispatch] = useContext(Context);
    const open = Boolean(anchorEl);

    useEffect(() => {
        setFullname(cookies.get('fullname') as string);
        setAvatar(cookies.get('avatar') as string);
    }, [])

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleProfile = () => {
        router.push(`/profile/${fullname}`)
        handleClose();
    }

    const handleOpenModalAuth = () => {
        dispatch({
            type: 'set::modalAuth',
            payload: true,
        })
    }


    const handleLogout = () => {
        cookies.remove('fullname');
        cookies.remove('avatar');
        cookies.remove('accessToken');
        cookies.remove('refreshToken');
        handleClose();
        window.location.reload();
    }

    return (
        (fullname == null && avatar == null) ? <ul className="header__nav">
            <li className="nav__item">
                <NavItemSelect text="Fiverr Pro" link="/test" />
            </li>
            <li className="nav__item">
                <NavItemSelect text="Explore" link="/test" />
            </li>
            <li className="nav__item">
                <NavItem text="English" link="/english" />
            </li>
            <li className="nav__item">
                <NavItem text="Become a seller" link="/seller" />
            </li>
            <li className="nav__item" onClick={handleOpenModalAuth}>
                <NavItem text="Sign in" link="#" />
            </li>
            <li className={`nav__item ${showNavbar ? "scrolled" : ""}`} onClick={handleOpenModalAuth}>
                <NavItem text="Join" link="#" />
            </li>
        </ul> : <ul className="header__nav">
            <li className="nav__item">
                <NotiIcon />
            </li>
            <li className="nav__item">
                <MessageIcon />
            </li>
            <li className="nav__item !border-0">
                <Tooltip title="Account settings">
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        {avatar ? <Avatar sx={{ width: 32, height: 32 }} src={avatar} /> : fullname ? <Avatar sx={{ width: 32, height: 32 }}>{fullname[0]}</Avatar> : <Avatar />}
                    </IconButton>
                </Tooltip>
                <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={{
                        elevation: 0,
                        sx: {
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: 1.5,
                            '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                            },
                            '&::before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                    <MenuItem onClick={handleProfile}>
                        Profile
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        Orders
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                            <Settings fontSize="small" />
                        </ListItemIcon>
                        Settings
                    </MenuItem>
                    <MenuItem onClick={handleLogout}>
                        <ListItemIcon>
                            <Logout fontSize="small" />
                        </ListItemIcon>
                        Logout
                    </MenuItem>
                </Menu>
            </li>
        </ul>
    )
}

export default HeaderNav
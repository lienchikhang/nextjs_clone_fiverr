import React from 'react'
import MessageIcon from './MessageIcon'
import NotiIcon from './NotiIcon'
import { Avatar } from '@mui/material'

interface Props {
    avatar: string,
    fullname: string,
}

const HeaderLoginedInNav: React.FC<Props> = ({ avatar, fullname }) => {
    return (
        <ul className="header__nav">
            <li className="nav__item">
                <NotiIcon />
            </li>
            <li className="nav__item">
                <MessageIcon />
            </li>
            <li className="nav__item">
                <Avatar src={avatar} /> : <Avatar>{fullname}</Avatar>
            </li>
        </ul>
    )
}

export default HeaderLoginedInNav
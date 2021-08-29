import React from 'react'
import './Header.css'
import { connect } from 'react-redux'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import AddIcon from '@material-ui/icons/Add';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar, IconButton, Tooltip } from '@material-ui/core';

function Header({ user }) {
    const { displayName, photoURL } = user;

    return (
        <div className="header">
            <div className="header__left">
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                />
                <div className="header__input">
                    <SearchIcon />
                    <input type="text" placeholder="Search Facebook" />
                </div>
            </div>
            <div className="header__middle">
                <Tooltip title="Home">
                    <div className="header__option header__option--active">
                        <HomeIcon />
                    </div>
                </Tooltip>
                <Tooltip title="Friends">
                    <div className="header__option">
                        <PeopleIcon />
                    </div>
                </Tooltip>
                <Tooltip title="Watch">
                    <div className="header__option">
                        <OndemandVideoIcon />
                    </div>
                </Tooltip>
                <Tooltip title="Marketplace">
                    <div className="header__option">
                        <StorefrontIcon />
                    </div>
                </Tooltip>
                <Tooltip title="Groups">
                    <div className="header__option">
                        <SupervisedUserCircleIcon />
                    </div>
                </Tooltip>
            </div>
            <div className="header__right">
                <div className="header__info">
                    <Avatar src={photoURL} />
                    <h4>{ displayName }</h4>
                </div>                    
                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <QuestionAnswerIcon />
                </IconButton>
                <IconButton>
                    <NotificationsIcon />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
            </div>
        </div>
    )
}

const reduxState = state => ({ user: state.user })

export default connect(reduxState)(Header)

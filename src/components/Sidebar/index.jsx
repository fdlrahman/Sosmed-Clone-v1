import React from 'react'
import './Sidebar.css';
import { connect } from 'react-redux'
import SidebarRow from '../SidebarRow';
import AddBoxIcon from '@material-ui/icons/AddBox';
import PeopleIcon from '@material-ui/icons/People';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Sidebar({ user }) {
    const { displayName, photoURL } = user

    return (
        <div className="sidebar">
            <SidebarRow 
                src={photoURL}
                title={displayName} 
            />
            <SidebarRow Icon={AddBoxIcon} title="COVID-19 Information Center" />
            <SidebarRow Icon={PeopleIcon} title="Find Friends" />
            <SidebarRow Icon={OndemandVideoIcon} title="Watch Video" />
            <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
            <SidebarRow Icon={SupervisedUserCircleIcon} title="Find Group" />
            <SidebarRow Icon={ExpandMoreIcon} title="See More" />
        </div>
    )
}

const reduxState = state => ({ user: state.user })

export default connect(reduxState)(Sidebar)

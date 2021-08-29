import React from 'react'
import './SidebarRow.css'
import Avatar from '@material-ui/core/Avatar';

function SidebarRow({ src, Icon, title }) {
    return (
        <div className="sidebar__row">
            { src && <Avatar src={ src } /> }
            { Icon && <Icon /> }
            <p className="sidebar__title">{ title }</p>
        </div>
    ) 
}

export default SidebarRow

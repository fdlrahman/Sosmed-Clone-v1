import React from 'react'
import './IconSender.css'

function IconSender({ Icon, title, color }) {
    return (
        <div className="iconSender">
            <Icon style={{ color: color }} />
            <p className="iconSender__title">{title}</p>
        </div>
    )
}

export default IconSender

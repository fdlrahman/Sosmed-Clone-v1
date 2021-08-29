import React, { useState } from 'react'
import './MessageSender.css'
import { connect } from 'react-redux'
import { addPosts } from '../../config/redux/action'
import { Avatar } from '@material-ui/core'
import IconSender from '../IconSender'
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoIcon from '@material-ui/icons/Photo';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';

function MessageSender({ user, addPosts }) {
    const [message, setMessage] = useState('')
    const [url, setURL] = useState('')
    const { displayName, photoURL } = user;

    const handleSubmit = e => {
        e.preventDefault()
        
        const data = {
            image: url,
            desc: message,
            imgSrc: photoURL,
            title: displayName,
        }

        addPosts(data)
            .then(() => {
                setMessage('')
                setURL('')
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar src={photoURL} />
                <form onSubmit={ handleSubmit }>
                    <input type="text" placeholder={`What's on your mind, ${displayName}?`} value={message} onChange={e => setMessage(e.target.value)} className="messageSender__message" />
                    <input type="text" placeholder="Image URL (Optional)" value={url} onChange={e => setURL(e.target.value)}className="messageSender__url" />

                    <button type="submit"></button>
                </form>
            </div>
                <hr className="messageSender__hr" />
            <div className="messageSender__bottom">
                <IconSender title="Live Video" Icon={VideocamIcon} color="#F02849" />
                <IconSender title="Photo/Video" Icon={PhotoIcon} color="#45BD62" />
                <IconSender title="Feeling/Activity" Icon={SentimentSatisfiedIcon} color="#F7B928" />
            </div>
            {/* Post */}
        </div>
    )
}

const reduxState = state => ({ user: state.user })
const reduxDispatch = dispatch => ({
    addPosts: (data) => dispatch(addPosts(data))
})

export default connect(reduxState, reduxDispatch)(MessageSender)

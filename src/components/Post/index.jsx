import React from 'react'
import './Post.css'
import { Avatar } from '@material-ui/core'
import IconSender from '../IconSender';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ShareIcon from '@material-ui/icons/Share';

function Post({ image, imgSrc, title, timestamp, desc }) {
    return (
        <>
            <div className="post">
                <div className="post__top">
                    <div className="post__info">
                        <Avatar src={imgSrc && imgSrc} />
                        <div>
                            <h3>{title}</h3>
                            <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                        </div>
                    </div>
                    <p className="post__desc">
                        {desc}
                    </p>
                </div>
                { image && <div className="post__middle" style={{backgroundImage: `url(${image})`}}></div> }
            </div>
            <div className="post__bottom">
                    <IconSender title="Like" Icon={ThumbUpIcon} />
                    <IconSender title="Comment" Icon={ChatBubbleOutlineIcon} />
                    <IconSender title="Share" Icon={ShareIcon} />
            </div>
        </>
    )
}

export default Post

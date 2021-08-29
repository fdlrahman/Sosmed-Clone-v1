import React, { useState, useEffect } from 'react'
import './Feed.css'
import { connect } from 'react-redux'
import {db} from '../../config/firebase'
import Stories from '../Stories';
import MessageSender from '../MessageSender'
import Post from '../Post';

function Feed() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        db.collection("posts")
            .orderBy('timestamp', 'desc')
            .onSnapshot((res) => setPosts(res.docs.map(doc => doc.data())))
    }, [])

    return (
        <div className="feed">
            <Stories />
            <MessageSender
            />
            {
                posts.map((obj, i) => 
                    <Post
                        image={obj.image}
                        imgSrc={obj.imgSrc} 
                        title={obj.title} 
                        timestamp={obj.timestamp}
                        desc={obj.desc}
                        key={i} 
                    />
                )
            }
        </div>
    )
}


export default Feed

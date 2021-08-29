import React from 'react'
import './Stories.css'
import Story from '../Story'

function Stories() {
    return (
        <div className="stories">
            <Story
                image="https://img.wattpad.com/cover/267544351-256-k426864.jpg"
                profileSrc="https://i.pinimg.com/736x/0e/9a/fc/0e9afc37124ebff0079855b761c1590d.jpg"
                title="Mikey San"
            />
            <Story
                image="https://i.pinimg.com/750x/ce/0d/9e/ce0d9ead299eb0ee550b2e5b9306b882.jpg"
                profileSrc="https://pbs.twimg.com/profile_images/908258729061081088/FEeqK2ty_400x400.jpg"
                title="Asta San"
            />
            <Story
                image="https://i.pinimg.com/736x/b8/fe/bb/b8febbac621a2da53cf8f617e66321aa.jpg"
                title="Noelle San"
            />
            <Story
                image="https://static.republika.co.id/uploads/images/inpicture_slide/coding-ilustrasi-_160406100902-246.jpg"
                profileSrc="https://media.hitekno.com/thumbs/2020/11/07/10944-drama-korea-start-up-twitteratk-dramaindo/730x480-img-10944-drama-korea-start-up-twitteratk-dramaindo.jpg"
                title="Nam Do San"
            />
            <Story
                image="https://cdn.idntimes.com/content-images/post/20200402/1-1bb45e85e9a65eb72e172339a7bd33dd.jpg"
                profileSrc="https://cdn.antaranews.com/cache/800x533/2019/07/24/Screenshot_2019-07-24-08-50-42-89-01.jpeg"
                title="Song Hye Kyo"
            />
        </div>
    )
}

export default Stories;

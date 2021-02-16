import React from "react";
import '../../css/Newsfeed.css';
import Post from "./Post/Post";
import CreatePostContainer from "./CreatePost/CreatePostContainer";
import Stories from './RightSideComponents/Stories';


const Newsfeed = (props) => {

    let postsArr = props.state.posts.map(post => <Post id={post.id}
                                                       key={post.id}
                                                       postText={post.postText}
                                                       postedTime={post.postedTime}
                                                       userName={props.userName}
                                                       userIcon={props.profilePhoto} />)

    return (
        <div className="main__wrap">
            <div className={'component__wrapper' + ' ' + props.state.componentName}>
                <div className="left__side">
                    <CreatePostContainer />
                    <div className="posts__block">
                        {postsArr}
                    </div>
                </div>
                <div className="right__side">
                    <Stories stories={props.state.stories}/>
                </div>
            </div>
        </div>
    )
}

export default Newsfeed;
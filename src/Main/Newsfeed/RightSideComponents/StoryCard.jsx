import React from 'react';

const StoryCard = (props) => {
return (
        <div className="story__card">
            <div className="img__block">
                {
                    props.icon ? <img src={props.icon} alt="stoty" /> : ''
                }
            </div>
            <div className="story__info">
                <p className="story__name">
                    {props.storyName}
                </p>
                <p className="time">
                    {props.time}
                </p>
            </div>
        </div>
    );
}

export default StoryCard;
import React from 'react';
import ComponentTitleBlock from './../../ComponentTitleBlock/ComponentTitleBlock';
import StoryCard from './StoryCard';

const Stories = (props) => {

    let storiesCards = props.stories.map(story => <StoryCard key={story.id} 
        icon={story.userIcon}
        storyName={story.userName} time={story.time}/>)

    return (
        <div className='stories'>
            <ComponentTitleBlock compTitle='Stories'/> 
            <div className="component__body">
                <StoryCard storyName='Create Your Story' time='time to story'/>
                {storiesCards}
            </div>
        </div>
    );
}

export default Stories;

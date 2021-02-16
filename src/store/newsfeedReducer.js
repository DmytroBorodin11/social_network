import userLogo from "../assets/images/user.jpg";
import userIcon from '../assets/images/profile_page/large_profile_photo.png';
const ADD_POST = 'ADD-POST';


let initialState = {
    componentName: 'newsfeed',
    createPost: {
        postBtns: [],
        newPostText: '',
        userIcon: userLogo,
    },
    posts: [
        {
            id: 1,
            postText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus',
            postedTime: 'Just now',
            userName: 'John Doe',
            userIcon: userLogo,
        },
        {
            id: 2,
            postText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus',
            postedTime: 'Just now',
            userName: 'John Doe',
            userIcon: userLogo,
        },
        {
            id: 3,
            postText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus',
            postedTime: 'Just now',
            userName: 'John Doe',
            userIcon: userLogo,
        },
        {
            id: 4,
            postText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus',
            postedTime: 'Just now',
            userName: 'John Doe',
            userIcon: userLogo,
        }
    ],
    stories: [
        {
            userName: 'John Doe',
            time: '1 min ago',
            id: 1,
            userIcon: userLogo,
        },
        {
            userName: 'Bni Cist',
            time: '2 min ago',
            id: 2,
            userIcon: userIcon,
        }
    ]
};

const newsfeedReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 4,
                postText: action.post,
                postedTime: 'Just now',
                userName: 'John Doe',
                userIcon: userLogo,
            }
            /*let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.createPost = {...state.createPost};
            stateCopy.posts.push(newPost);
            stateCopy.createPost.newPostText = '';*/
            return {
                ...state,
                posts: [...state.posts, newPost],
                createPost: {
                    ...state.createPost,
                    newPostText: '',
                }
            };
        default:
            return state;
    }
}

export const addPostAC = (post) => ({type: ADD_POST, post})
export default newsfeedReducer;
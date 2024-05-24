import mongoose from "mongoose";

const PostSchema = mongoose.Schema({
    postedBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    text:{
        type: String,
        maxLength:500
    },
    img:{
        type: String
    },
    likes:{
        type: Number,
        default:0
    },
    replies:[
        {
            userId:{
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
                required: true
            },
            userProfilePic:{
                type: String
            },
            username:{
                type: String
            },
            text:{
                type: String,
                required: true
            }
        }
    ]
}, 
{
    timestamps: true
}
);

const Post = mongoose.model('Post', postSchema);

export default Post;
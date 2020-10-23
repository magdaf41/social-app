import React from 'react';

function Posts(props) {


    let postsToDisplay = props.posts.map(post => {


        return (

            <div key={post.id} >
                <div  className="post.username">
                    {post.user.username},
                    {post.created_at}
                </div>
                <div className="post">
                    {post.content}
                </div>

            </div>
        )
    })

    return (

        <div className="postsList">
            {postsToDisplay}
        </div>

    )

}

export default Posts;
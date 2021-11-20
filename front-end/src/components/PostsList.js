export const PostsList = ({ posts }) => {
    return (
        <div>
            {posts.map(post => {
                return <h3 key={post.id}>{post.content}</h3>
            })}
        </div>
    )
}

export default PostsList;
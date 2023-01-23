
export default function Posts({ posts }) {

    return (
      <ol>
        {posts.length === 0 && <div id='no-match-found'><h2>No match found, try again!</h2></div>}
        {posts.map(post => (
          <li key={post.id}>
            <p id="items-first">{post.title} (<a href={post.url} target="_blank">{post.url}</a>)</p>
            <p id="items-second">{post.points} points by {post.author} {post.created_at} | hide | {post.num_comments} comments</p>
          </li>
        ))}
      </ol>
    );
  }
import Post from "components/Post";
import type { PostType } from "types";

const PostsList: React.FC<{ posts: PostType[] }> = ({ posts }) => {
  return (
    <div className="posts">
      {posts.map((post, index) => (
        <Post key={`${post._id}--${index}`} data={post} />
      ))}
      <style jsx>{`
        .posts {
          max-width: 800px;
        }
      `}</style>
    </div>
  );
};

export default PostsList;

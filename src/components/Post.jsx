import { AiFillDelete } from "react-icons/ai";
import { PostList } from "../store/post-list-store";
import { useContext } from "react";
const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);
  return (
    <div className="card post-card" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}{" "}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => 
              deletePost(post.id)
            }
          >
            <AiFillDelete />
            {/* {post.reaction} */}
          </span>
        </h5>
        <p className="card-text">{post.body}</p>

        {post.tags.map((post,index) => (
          <span key={index} className="badge text-bg-primary hastag">
            {post}
          </span>
        ))}
        <div className="alert alert-success reaction" role="alert">
          This post has been reacted by {post.reaction} people.
        </div>
      </div>
    </div>
  );
};
export default Post;

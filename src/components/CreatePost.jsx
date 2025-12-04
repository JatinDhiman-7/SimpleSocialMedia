import { useContext, useRef } from "react";
import PostListProvider, { PostList } from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);
  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();
  const handeSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const posttitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reaction = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(",");
    addPost(userId, posttitle, postBody, reaction, tags);
    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";
  };
  return (
    <form className="create-post" onSubmit={handeSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter Your User Id here
        </label>
        <input
          ref={userIdElement}
          type="text"
          className="form-control"
          id="userId"
          placeholder="Your User Id"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post title
        </label>
        <input
          ref={postTitleElement}
          type="text"
          className="form-control"
          id="title"
          placeholder="How are you feeling Today......"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Content
        </label>
        <textarea
          ref={postBodyElement}
          rows={4}
          type="text"
          className="form-control"
          id="title"
          placeholder="Tell us more about it"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reaction" className="form-label">
          Number of reaction
        </label>
        <input
          ref={reactionsElement}
          type="text"
          className="form-control"
          id="reaction"
          placeholder="How many people reacted to this post"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter Your Hastags Here
        </label>
        <input
          ref={tagsElement}
          type="text"
          className="form-control"
          id="tags"
          placeholder="Please enter tags using space"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};
export default CreatePost;

import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, disptachPostlist] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );
  const addPost = (userId, posttitle, postBody, reactions, tags) => {
    disptachPostlist({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: posttitle,
        body: postBody,
        reaction: reactions,
        userId: userId,
        tags: tags,
      },
    });
  };
  const deletePost = (postId) => {
    disptachPostlist({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };
  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};
const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Mumbai",
    body: "Hi Friends,I am going to mumbai for my vacations. Hope to enjoy a lot.Peace OUt",
    reaction: 2,
    userId: "user-9",
    tags: ["vacation", "Mumbai", "Enjoying"],
  },
  {
    id: "2",
    title: "Pass ho bhai",
    body: "4 saal ki masti k baad bhi ho gaye hain pass. Hard to belive",
    reaction: 15,
    userId: "user-12",
    tags: ["Graduating", "Unbeliveable"],
  },
];
export default PostListProvider;

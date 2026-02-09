import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = {
      likes: Number(reactionsElement.current.value),
      dislikes: 0,
    };

    const tags = tagsElement.current.value.split(" ");

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";

    addPost(userId, postTitle, postBody, reactions, tags);
  };

  return (
    <form className="creat-post p-4" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter Your Id Here
        </label>
        <input
          type="text"
          id="userId"
          ref={userIdElement}
          className="form-control"
          placeholder="Enter User Id"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          id="title"
          ref={postTitleElement}
          className="form-control"
          placeholder="Enter title"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Number of Reactions
        </label>
        <input
          type="number"
          id="reactions"
          ref={reactionsElement}
          className="form-control"
          placeholder="How many people reacted"
          min="0"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter your #tags
        </label>
        <input
          type="text"
          id="tags"
          ref={tagsElement}
          className="form-control"
          placeholder="Enter tags separated by space"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          id="body"
          ref={postBodyElement}
          rows="4"
          className="form-control"
          placeholder="Enter content"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Create Post
      </button>
    </form>
  );
};

export default CreatePost;

import { GET_POSTS_URL } from "../../scripts/url";
import { UPDATE_POSTS } from "./actionTypes";
export function fetchPosts() {
  return (dispatch) => {
    console.log("fetching posts from ", GET_POSTS_URL);
    fetch(
      "http://cors-anywhere.herokuapp.com/http://107.23.92.242/api/v1/post"
    ).then((response) => console.log(response));
  };
}

export function updatePosts(posts) {
  return {
    type: UPDATE_POSTS,
    posts,
  };
}

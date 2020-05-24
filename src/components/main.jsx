import React from "react";
import Header from "./header";
import CoverPhoto from "./cover-photo";
import ProfileBar from "./profile-bar";
import { connect } from "react-redux";
import { fetchPosts } from "../redux/action/post";
class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  render() {
    return (
      <div className="main">
        <Header />
        <CoverPhoto />
        <ProfileBar />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  posts: state.posts,
});

export default connect(mapStateToProps)(Main);

import React from 'react';
import PropTypes from 'prop-types';
import TitleBar from './TitleBar.js';
import AddPost from './AddPost.js';
import TopicList from './TopicList.js';
import AddComment from './AddComment.js';
import CommentList from './CommentList.js';

export default class App extends React.Component {
  render() {
    return (
      <>
        <TitleBar
          title={this.props.passedPropTitle}
          moderator={this.props.passedPropModerator}/>
       {/* wrap AddTopic and TopicList with a div that utilizes the wrapper class */}
        <div className='wrapper'>
          <AddPost />
          <TopicList passed_posts={this.props.passedPropAllPosts}/>
          <CommentList passed_comments={this.props.passedPropAllComments}/>

        </div>
      </>
    )
  }

};

// App.propTypes = {
//   passedPropTitle: PropTypes.string.isRequired,
//   passedPropAllPosts: PropTypes.array.isRequired
// };

import React from 'react';
import Comment from './Comment.js';
import PropTypes from 'prop-types';

export default class CommentList extends React.Component {
  renderAllComments(){
    if (this.props.passed_comments.length === 0){
      return (
        <div className = 'single-block-item-style'>
          <p className = 'single-block-item-style__message'>
              Add comment
          </p>
        </div>
      );
    } else {
      return this.props.passed_comments.map((com) => {
        return <Comment key={com._id} comment_prop_obj={com}/>
      });
    }

  }
  render(){
    return (
      <>
        {this.renderAllComments()}
      </>
    )
  }

};

// TopicList.propTypes ={
//   passed_comments: PropTypes.array.isRequired,
// };

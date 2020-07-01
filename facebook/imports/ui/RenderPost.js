import React from 'react';
import {USER_Posts_Access} from './../api/user_posts.js';
import {USER_comments} from './../api/comments.js';
import AddComment from './AddComment.js';
import CommentList from './CommentList.js';
import Comment from './Comment.js';

import PropTypes from 'prop-types';


export default class RenderPost extends React.Component{

  render(){
    return (
      <>

        <div key={this.props.post_prop_obj._id} className='single-block-item-style'>
          {/* below is a statement function */}
          <div className='post'>
            <div>
              <h3 className='post__topic'>{this.props.post_prop_obj.topic}</h3>
            </div>
            <div className='post__actions'>


            </div>
          </div>
          <div className="likes">
            <button className='likebutton button--round' onClick={() => {  // anonymous arrow function
              USER_Posts_Access.update({_id: this.props.post_prop_obj._id},
                {$inc: {likes: 1}})}}></button>
                <p className='post__stats'>{this.props.post_prop_obj.likes}</p> {''/* single space before button hack */}



            <button className='disbutton button--round' onClick={() => {
              USER_Posts_Access.update({_id: this.props.post_prop_obj._id},
                {$inc: {dislikes: 1}})}}></button>


                <p className='post__stats'>{this.props.post_prop_obj.dislikes}</p> {''/* single space before button hack */}

                <AddComment />

            <button className='deletebutton button--round' onClick={() => {
              USER_Posts_Access.remove({_id: this.props.post_prop_obj._id})
            }}>X</button>
            </div>
        </div>
      </>
    );
  }
};
// RenderPost.propTypes = {
//   post_prop_obj: PropTypes.object.isRequired,
// };

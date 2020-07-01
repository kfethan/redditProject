import React from 'react';
import {USER_comments} from './../api/comments.js';

import PropTypes from 'prop-types';


export default class AddComment extends React.Component{
  processFormData(event){
    event.preventDefault()
    let comment = event.target.formInputNameAttribute.value;
    if (comment){
      event.target.formInputNameAttribute.value = ''; // clear input box
      USER_comments.insert({
        postid: '4',
        commentInfo: comment,
        likes: 0,
        dislikes: 0,
        time: new Date(),
      });

    };
  }

  render(){
    return (
      <div className='post_format'>
        <form className='form' onSubmit={this.processFormData.bind(this)}>
          <input className='form__input' type='text' name='formInputNameAttribute' placeholder="comment"/>
          <button className='button'>Post</button>
        </form>
      </div>
    );
  }
};

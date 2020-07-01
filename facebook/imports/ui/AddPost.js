import React from 'react';
import {USER_Posts_Access} from './../api/user_posts.js';


export default class AddPost extends React.Component{

  processFormData(event){
    event.preventDefault()
    let newTopic = event.target.formInputNameAttribute.value;
    if (newTopic){
      event.target.formInputNameAttribute.value = ''; // clear input box
      USER_Posts_Access.insert({
        topic: newTopic,
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
          <input className='form__input' type='text' name='formInputNameAttribute' placeholder="What's on your mind?"/>
          <button className='button'>Post</button>
        </form>
      </div>
    );
  }
};

import React from 'react';
import './main.html'
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor'; // named export from Meteor
import {USER_Posts_Access} from './../imports/api/user_posts.js';
import {USER_comments} from './../imports/api/comments.js';
import App from './../imports/ui/App.js';


Meteor.startup(() =>  {

  // Tracker tracks queries and reruns code when queries change
  Tracker.autorun(() => {
    // let allPostsInDB = UP_Collection_Access.find().fetch();
    // let allPostsInDB = UP_Collection_Access.find({votes: 3}).fetch();
    // the previous returns all topics that have 3 votes
    // change the votes to something else and they disappear

    let allPostsInDB = USER_Posts_Access.find({/*emty so get all posts */},
                                                   {sort: {time : -1}});


    let allComments = USER_comments.find({/*emty so get all posts */},
                                                   {sort: {time : -1}});

    // the second argument {sort} is the options object
        let title = 'FACEBOOK';


        ReactDOM.render(<App
            passedPropTitle={title}
            passedPropModerator={'Jake G'}
            passedPropAllPosts={allPostsInDB}
            passedPropAllComments={allComments}

            //passedFooter={'\u00A9 441 reddit'/* \u00A9 unicode sequence for copyright */}
          />, document.getElementById('content'));

      });

    });

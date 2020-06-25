import { Meteor } from 'meteor/meteor';

import {UP_Collection_Access} from './../imports/api/user_post.js';

Meteor.startup(() => {
  UP_Collection_Access.insert({
    topic: 'Jake G',
    movie: 7,
  });
  UP_Collection_Access.insert({
    topic: 'Paul Walker',
    movie: 'fast and furious'
  })
  console.log(UP_Collection_Access.find().fetch());
});

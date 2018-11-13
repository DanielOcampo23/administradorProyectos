import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
 
import App from '../imports/ui/App.js';
import Login from '../imports/ui/Login.js';
import ReactRouter from '../imports/ui/ReactRouter.js';
 
Meteor.startup(() => {
  render(<ReactRouter />, document.getElementById('render-target'));
});
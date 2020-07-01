import React from 'react';
import PropTypes from 'prop-types';

// need to export TitleBar class
export default class TitleBar extends React.Component{
  renderModerator(){
    if(this.props.moderator){
      return <p className='title-bar__moderator'>user: {this.props.moderator}</p>
    } else {
      return <p className='title-bar__moderator'>user: unknown</p>
    }
  }
  render(){
    return (
      <div className='wrapper'>
        <div className='title-bar'>
          <h1>{this.props.title}</h1>
          {this.renderModerator()}
        </div>
      </div>
    );
  }
};

TitleBar.propTypes = {
  title: PropTypes.string.isRequired,
  moderator: PropTypes.string,
};

import React from 'react';
import Avatar from 'react-avatar';

class Issue extends React.Component{
  getIssues() {
    return this.props.issues || [];
  }
  render(){
    return <div>
      {this.getIssues().map(entry =>
          <div key={entry.get('id')}>
            <h3>{entry.get('title')}</h3>
            <Avatar size="100" round="true" src={entry.getIn(['user','avatar_url'])} />
            <div>{entry.getIn(['user','login'])}</div>
          </div>
      )}
    </div>;
  }

}

export default Issue;

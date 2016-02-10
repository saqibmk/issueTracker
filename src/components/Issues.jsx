import React from 'react';
import Issue from './issue';
import {connect} from 'react-redux';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import * as actionCreators from '../actions'





export const Issues = React.createClass({

  render: function() {
    return <div className="voting">
        <Issue {...this.props}/>
    </div>;
  }
});

function mapStateToProps(state){
  return {
    issues: state.get('issues')
  };
};




export const IssuesContainer = connect(mapStateToProps,actionCreators)(Issues);

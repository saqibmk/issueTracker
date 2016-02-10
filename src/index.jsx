import React from 'react';
import ReactDOM from 'react-dom';
import {IssuesContainer} from './components/Issues';
import {createStore} from 'redux';
import reducer from './reducer';
import {Provider} from 'react-redux';
import {setState} from './actions';

const store = createStore(reducer);

fetch('https://api.github.com/repos/django/django/issues')
  .then(res => res.json())
  .then(result => {
      store.dispatch(setState({issues:result}))
})

ReactDOM.render(
  <Provider store={store}>
    <IssuesContainer />
  </Provider>,
  document.getElementById('app')
);

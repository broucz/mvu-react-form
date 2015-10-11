import React from 'react';
import {render} from 'react-dom';

const start = (Module, DOMElementId) => {
  const rootElement = document.getElementById(DOMElementId);
  let state;

  function dispatch(action) {
    state = Module.update(state, action);

    render(
      <Module.view {...state} dispatch={dispatch} />,
      rootElement
    );
  }

  // Dispatch an initial `fake` action that will initialize
  // all modules according to their default values.
  dispatch({type: '@@INIT'});
};

export default start;

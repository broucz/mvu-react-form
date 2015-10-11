import React from 'react';
import Container from '../components/FieldContainer';
import Question from '../components/FieldQuestion';
import Description from '../components/FieldDescription';

const UPDATE = 'UPDATE';

// -- Enhancer
  // -- Update
  // -- View

const feed = (Child, options) => ({
  update(
    {state = Child.update(undefined, {}, options)} = {},
    {type, action} = {}
  ) {
    switch (type) {
    case UPDATE:
      return {
        state: Child.update(state, action, options),
        options
      };
    default:
      return {state, options};
    }
  },
  view({state, dispatch, options: {question, description}}) {
    return (
      <Container>
        <Question question={question} />
        <Description description={description} />
        <Child.view
          {...state}
          dispatch={action => dispatch({
            type: UPDATE,
            action
          })}
        />
      </Container>
    );
  }
});

export default feed;

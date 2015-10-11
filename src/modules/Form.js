import React from 'react';
import defineModel from '../helpers/defineFormModel';

const UPDATE = 'UPDATE';

const Form = options => {
  // -- Model

  const model = defineModel(options);

  // -- Update
  // -- View

  return {
    update(
      {state = model.map(({Module}) =>
        Module.update()
      )} = {},
      {type, action, index} = {}
    ) {
      switch (type) {
      case UPDATE:
        return {
          state: [
            ...state.slice(0, index),
            model[index].Module.update(state[index], action),
            ...state.slice(index + 1)
          ]
        };
      default:
        return {state};
      }
    },
    view({state, dispatch}) {
      return (
        <div>
          {model.map(({Module}, index) =>
            <div key={index}>
              <Module.view
                {...state[index]}
                dispatch={action => dispatch({
                  type: UPDATE,
                  action,
                  index
                })}
              />
            </div>
          )}
        </div>
      );
    }
  };
};

export default Form;

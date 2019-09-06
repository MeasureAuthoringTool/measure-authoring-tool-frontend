
export function updateObject(oldObject, newValues) {
  return Object.assign({}, oldObject, newValues);
}

export function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if (Object.prototype.hasOwnProperty.call(handlers, action.type)) {
      return handlers[action.type](state, action);
    }

    return state;
  };
}
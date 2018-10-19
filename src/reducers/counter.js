const initialState = {
  count: 0,
  count2: 0,
  count3: 0,
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
        count2: state.count2 + 1,
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
        count2: state.count2 + 1,
      };

      //I need the count to replace what is originally in the increment/decrement not just add to it. 
      case 'REPLACE':
        return {
          ...state,
          count: state.count + 1, //trying to figure out how this part can replace like maybe count: state.count '', 
          count2: state.count2 = 0,
        }
    default:
      return state;
  }
}

export default counterReducer;
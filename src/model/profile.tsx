const initialState = {
  profile: {},
};

export default (state = initialState, action: {type: string; payload: any}) => {
  switch (action.type) {
    case 'SET_PROFILE':
      return {
        ...state,
        profile: action.payload,
      };
    default:
      return state;
  }
};

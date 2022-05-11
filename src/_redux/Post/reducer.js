const initialState = {
  userData: [],
  start: 0,
};

const userDataReducer = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case 'Show':
      return {...state, userData: payload};
    case 'Increase':
      return {...state, start: payload};
    case 'Add':
      return {...state, userData: payload};
    case 'DEL':
      return {...state, userData: payload};
    case 'UPDATE':
      console.log("payloaaaaddd", payload)
      return {...state, userData: payload};
    default:
      return {...state};
  }
};

export default userDataReducer;

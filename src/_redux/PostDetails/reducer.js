const initialState = {
    comm: []
  };
  
  const CommReducer = (state = initialState, action) => {
    const {type, payload} = action;
  
    switch (type) {
      case 'COMM':
        return {...state, comm:[...payload]};
      default:
        return {...state};
    }
  };
  
  export default CommReducer;
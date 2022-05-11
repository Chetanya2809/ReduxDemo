import axios from 'axios';

export const getUserList = () => {
  return (dispatch, getState) => {
    const {userData, start} = getState().userDataReducer;
    axios
      .get(
        `https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=10`,
      )
      .then(res => {
        let newData = res.data;
        if (start >= 10) {
          newData = [...userData, ...res.data];
        }
        dispatch({type: 'Show', payload: newData});
        console.log('response', res);
      })
      .catch(err => console.log('error', err));
  };
};

export const getDelete = (item, userData) => {
  return dispatch => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${item.id}`)
      .then(res => {
        console.log('del res', res);
        let index = userData.findIndex(x => x.title === item.title);
        userData.splice(index, 1), dispatch({type: 'DEL', payload: userData});
      });
  };
};
// export const updateData = (item, title, body) => {
//   return (dispatch, getState) => {
//     const {userData} = getState().userDataReducer;
//     axios
//       .patch(`https://jsonplaceholder.typicode.com/posts/${item.id}`, {title, body})
//       .then(res => {
//         let index = userData.findIndex(x => x.title === item.title);
//         const newData = userData;
//         newData[index] = res.data;
//         dispatch({type: 'UPDATE', payload: newData});
//       });
//   };
// };

export const AddedData = (data, details) => {
  return (dispatch, getState) => {
    const {userData} = getState().userDataReducer
    axios
      .post('https://jsonplaceholder.typicode.com/posts', {
        title: data,
        body: details,
      })
      .then(res => {
        console.log('post response', res);
        let newData = [res.data, ...userData]
        dispatch({type: 'Add', payload: newData});
      });
  };
};

export const updatedData = (data, details) => {
  return dispatch => {
    axios
      .put('https://jsonplaceholder.typicode.com/posts/1', {
        title: 'foo',
        body: 'bar',
      })
      .then(res => {
        console.log('updated', res);
      });
  };
};

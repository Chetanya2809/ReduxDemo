 import axios from "axios";
 
 const cardDetails=(route)=>{
    return(dispatch)=>{
        axios
        .get(
          `https://jsonplaceholder.typicode.com/posts/${route.params.DATA.id}/comments`,
        )
        .then(res => {
            dispatch({type:'COMM',payload:res.data})
          console.log('comments', res.data);
        });
    }
}
export default cardDetails;

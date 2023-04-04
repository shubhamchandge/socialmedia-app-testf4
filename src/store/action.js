export const fetchData = () => {

    return async (dispatch) => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const json = await response.json()
            return dispatch(
                { type: "FetchData", data: json })
               
        } catch (err) {
            return dispatch(
                { type: "ERROR", msg: "Unable to fetch data" })
        }
    }

}

// export const fetchData = () => {
//     return (dispatch) => {
//       dispatch(fetchPostsRequest());
//       axios
//         .get("https://jsonplaceholder.typicode.com/posts")
//         .then((response) => {
//           const posts = response.data;
//           dispatch(fetchPostsSuccess(posts));
//           console.log(response);
//         })
//         .catch((error) => {
//           const errorMsg = error.message;
//           dispatch(fetchPostsFailure(errorMsg));
//         });
//     };
//   };
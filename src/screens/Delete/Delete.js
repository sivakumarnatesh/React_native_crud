export const deleteUser = (id) => {
  console.log("first>>>", id)
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { method: 'DELETE' }
  ).then((response) => response.json()).then((json) => console.log(json));
};
export const editUser = (id) => {
  console.log("edit");
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
          id: 1,
          title: 'foo',
          body: 'bar',
          userId: 1,
      }),
      headers: {
          'Content-type': 'application/json; charset=UTF-8',
      },
  })
      .then((response) => response.json())
      .then((json) => console.log(json));
};

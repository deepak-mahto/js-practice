// re write using async/await

function loadJson(url) {
  return fetch(url).then((res) => {
    if (res.status === 200) {
      return res.json();
    } else {
      throw new Error(res.status);
    }
  });
}

loadJson("https://jsonplaceholder.typicode.com/todos").then((res) => {
  for (let i = 0; i < res.length; i++) {
    console.log(res[i].title);
  }
});

// async/await

async function loadJson(url) {
  try {
    const response = await fetch(url);
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error(response.status);
    }
  } catch (err) {
    console.log(err);
  }
}

async function solve() {
  const response = await loadJson("https://jsonplaceholder.typicode.com/todos");
  for (let i = 0; i < response.length; i++) {
    console.log(response[i].title);
  }
}

solve();

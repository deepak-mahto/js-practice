function importantAction(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Subscribe to ${username}`);
    }, 1000);
  });
}

function likeTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Like the ${video} video`);
    }, 1000);
  });
}

function shareTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Share the ${video} video`);
    }, 1000);
  });
}

function promRecurse(funcPromises) {
  if (funcPromises.length === 0) return;
  const current_promise = funcPromises.shift();

  current_promise
    .then((result) => console.log(result))
    .catch((err) => console.log(err));

  promRecurse(funcPromises);
}

promRecurse([
  importantAction("thePrimeGen"),
  likeTheVideo("vi, vim, neovim"),
  shareTheVideo("RUST"),
]);

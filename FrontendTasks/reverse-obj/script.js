let obj = {
  name: "Prakash",
  age: 111,
  hairColor: "black",
  likes: "food",
};

function invertKeyAndValue() {
    let targetedObj = {};
    for (let [key, value] of Object.entries(obj)) {
        targetedObj[value] = key;
    }
    return targetedObj;
}

const newObj = invertKeyAndValue(obj);
console.log(newObj);
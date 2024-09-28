let string = "deepak";
let shiftByTwo = 2;
function encodeString(string, shiftByTwo) {
  let encodedString = "";
  for (let i = 0; i < string.length; i++) {
    let charCode = string.charCodeAt(i);
    let newCharCode = charCode + shiftByTwo;
    encodedString += String.fromCharCode(newCharCode);
  }
  return encodedString;
}

let resultEncoded = encodeString(string, shiftByTwo);
console.log(resultEncoded);
let decreaseByTwo = 2;
function decodeString(resultEncoded, decreaseByTwo) {
  let decodedString = "";
  for (let i = 0; i < resultEncoded.length; i++) {
    let encodedCharCode = resultEncoded.charCodeAt(i);
    let decodedCharCode = encodedCharCode - 2;
    decodedString += String.fromCharCode(decodedCharCode);
  }
  return decodedString;
}

let resultDecoded = decodeString(resultEncoded, decreaseByTwo);
console.log(resultDecoded);

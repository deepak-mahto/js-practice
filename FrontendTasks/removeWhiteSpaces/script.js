const S = "     I am      a     Web    Developer   ";

function removeWhiteSpaces() {
    const newString = S.trim().replaceAll(" ", "");
    return newString;
}

const stringWithNoSpaces = removeWhiteSpaces(S);


// second method

function displayStringWithoutSpace(S){
    let targetedString = "";
    for (let i = 0; i < S.length; i++) {
        if (S[i] !== " ") {
            targetedString += S[i]; 
        }
    }
    return targetedString;
}
const stringWithoutSpace = displayStringWithoutSpace(S);
console.log(stringWithNoSpaces);
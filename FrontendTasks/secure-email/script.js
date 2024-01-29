const email = "mahtodeepak857@gmail.com";

function displaySecureEmail(email) {
    let secureEmail = "";
    let arr = email.split("@");
    secureEmail = arr[0].substring(0, arr[0].length/2) + "...@" + arr[1];
    return secureEmail;
}

const protectedEmail = displaySecureEmail(email);
console.log(protectedEmail);
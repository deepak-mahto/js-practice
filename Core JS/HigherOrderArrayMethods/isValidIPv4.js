function isValidIPv4(input) {
  const octets = input.split(".");
  if (octets.length !== 4) {
    return false;
  }
  return octets.every((octet) => {
    const num = parseInt(octet);
    return num >= 0 && num <= 255 && octet === num.toString();
  });
}

const result = isValidIPv4("132.165.43.41");
console.log(result);

const name = "Peter Heronimous Lind";
const firstSpace = name.indexOf(" ");
const lastSpace = name.lastIndexOf(" ");
const firstName = name.substring(0, firstSpace);
const middleName = name.substring(firstSpace + 1, lastSpace);
const lastName = name.substring(lastSpace + 1);

console.log(firstName);
console.log(middleName);
console.log(lastName);

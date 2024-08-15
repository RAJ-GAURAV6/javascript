const name ="Raj"
const repoCount = 50

//console.log(name + repoCount + " Value");// ye purana type hai likhne ka ya concate karne ka isee jada use na kare
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);//this is new version to concate.
const gameName = new String('hitesh-hc-com')
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);   
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));
const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "     hitesh     "
console.log(newStringOne);
console.log(newStringOne.trim());//trim matalab space ko hata dega.

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20', '-'))

console.log(url.includes('hitesh'));
console.log(url.includes('sundar'));

console.log(gameName.split('-'));//mdn ka use kare more detail ke liye.
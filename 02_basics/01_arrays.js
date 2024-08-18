// array
const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4, 5)
//console.log(myArr[1]);

// Array methods
//myArr.push(6)// isee method ka use koi bhi number add karne ke liye karte hai.
//myArr.push(7)
//myArr.pop()//isee method ka use humlog last number ko remove karne ke liye karte hai.


//myArr.unshift(9)//isee method ka use humlog number add hota hai isme but ye array mai aagye hota hai
//myArr.shift()
//console.log(myArr.includes(9));
//console.log(myArr.indexOf(9));
//console.log(myArr.indexOf(3));
//const newArr = myArr.join()

//console.log(myArr);
//console.log(newArr);//isme type change kar deta hai par value same aata hai
//console.log(typeof newArr);

// slice, splice

console.log("A ", myArr);
const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B ", myArr);
const myn2 = myArr.splice(1,3)
console.log("C ", myArr);
console.log(myn2);

//Dates

let myDate = new Date()
/*console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString()); 
console.log(typeof myDate);*/

//let myCreatedDate = new Date(2023,0,23)// javascript mai month zero se start hota hai
// console.log(myCreatedDate.toDateString());
//let myCreatedDate = new Date(2023, 0, 23, 5, 3)
//console.log(myCreatedDate.toLocaleString());
//let myCreatedDate = new Date("2023-01-14")
//console.log(myCreatedDate.toLocaleString());
let myCreatedDate = new Date("01-14-2023")
//console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
//console.log(myTimeStamp);
//console.log(myCreatedDate.getTime());
//console.log(Date.now()/1000);//ye decimal value de deta hai isliye use nhi karenge.
//console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default',{
    weekday : "long",
})


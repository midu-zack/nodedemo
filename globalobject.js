console.log(__filename);


// setInterval(() => {
//     console.log("hey");
// },  300);

// setTimeout(() => {
//     console.log("hello");
// },2000);

// console.clear();

const texting = setInterval(() => {
    console.log("hello");
}, 1000);

const si =setTimeout(() => {
    clearInterval(texting)
},  3000);

clearInterval(si)
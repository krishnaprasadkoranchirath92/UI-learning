// // let n = 3;
// // for (let i = 1; i <= n; i++) {
// //     console.log("hello"+i);
// // }   
// // console.log(process.argv);
// // console.log("--------------------------");
// // let arg = process.argv;
// // for(let i=2;i<arg.length;i++) {
// //     console.log("Hello - "+arg[i]);
// // }
// // console.log(process);
// const v = require("./Fruits");
// console.log("v--"+v[0].name);
// const figlet = require("figlet");
// figlet("Hello World!!", function (err, data) {
//     if (err) {
//       console.log("Something went wrong...");
//       console.dir(err);
//       return;
//     }
//     console.log(data);
//   }); 
import {sum, g} from "./maths.js"
console.log(sum(5,5)+g)
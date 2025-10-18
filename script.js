// let promiseArgument = (resolve, reject) => {
//   setTimeout(() => {
//     let currTime = new Date().getTime();
//     if(currTime %2===0){
//         resolve("Success: The current time is even." );
//     }
//     else{
//         reject("Failed!")
//     }
//   },2000);
// };

// let myPromise = new Promise(promiseArgument);
// myPromise
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((message) => {
//     console.log(message);
//   });

// class person {
//   constructor(name, age) {
//     this.name=name;
//     this.age=age;
//   }
// }
// let person1 = new person("hasnain", 23);
// console.log(person1);
// console.log(person1.name);
// console.log(person1.age);

class rectangle {
  constructor(width, height) {
    this.height = height;
    this.width = width;
    console.log("Rectangle created");
    console.log("Width is ", width);
    console.log("height" + this.height);
  }
}
let rentangle1 = new rectangle(20, 30);

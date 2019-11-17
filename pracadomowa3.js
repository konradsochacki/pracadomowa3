/* jshint esversion: 6 */

// let iife = (function(){

//             return{
//                 value: undefined, 
//                 setData: function(setValue){
//                     iife.value = setValue;
//                 },
//                 showData: function (){
//                                 if (typeof(this.value)=='number') console.log("Type of value is number.");
//                                 else if (typeof(this.value)=='string') console.log("Type of value is string");
//                                 else console.log("Value is undefined");
//                             },
//                 reverseData: function (){
//                                 if (typeof(this.value)=='number') {
//                                     let oppositeData=this.value*(-1);
//                                 console.log(oppositeData);}
//                                 else if (typeof(this.value)=='string') {
//                                     let newData=this.value;
//                                     let oppositeData = newData.split("")
//                                     .reverse()
//                                     .join("");
//                                     console.log(oppositeData); 
//                                     }

//                             }

//             };
//         }
//     )();

// iife.setData("hello world");
// iife.showData();
// iife.reverseData();

// iife.setData(1);
// iife.showData();
// iife.reverseData();

// iife.setData();
// iife.showData();
// iife.reverseData();


//////////////////////////////////////////////////////////////////////////////////////////////

// let Sum = (x,y) => x + y;
// let Sub = (x,y) => x - y; 
// let Mult = (x,y) => x * y;
// let Div = (x,y) => x / y; 

// function retCalcObj (){
//     return{
//     x: null,
//     y: null,
//     choseOpe: function(a,b){
//         this.x = a;
//         this.y = b;
//     },
//     setOperation: function (oper){
//         return oper(this.x,this.y);
//     },
//     };
// }

// let calc = retCalcObj();
// // calc.setOperation(Sum);
// calc.choseOpe(3,2);
// console.log(calc.setOperation(Div));
// console.log(calc);
// console.log(calc.oper);


//////////////////////////////////////////////////////

// let arr= [
//     {
//         x: 2,
//         y: 29
//     },
//     {
//         x: 31,
//         y: 23
//     },
//     {
//         x: 65,
//         y: 22
//     }
// ];

// BaseObject = {
//      x: null,
//      y: null,
//      sum: function(){
//          return this.x+this.y;
//      }
// };

// for (let i=0; i<arr.length; i++){
//     console.log(BaseObject.sum.call(arr[i]));
// }



// const array = [
//     {
//         x: 1,
//         y: 'object one value',
//         operation() {
//             return 'object one prafix: ' + this.x + this.y;
//         }
//     },
//     {
//         x: 2,
//         y: 'object two value',
//         operation() {
//             return 'object two prafix: ' + this.x + this.y;
//         }
//     },
//     {
//         x: 3,
//         y: 'object three value',
//         operation() {
//             return 'object three prafix: ' + this.x + this.y;
//         }
//     },
// ];

// const prefCalc = array.forEach(function (arItems) {
//     for (let i = 0; i < array.length; i++) {
//         let a = array[i];
//         let b = array[i].x;
//         a.y = (b % 3) +1;
//         let funcCall = a.operation.call(a);
//         console.log(funcCall);
//     }
// });

// console.log(prefCalc);

// length; i++){
//     let a=array[i];
//     array[i].y=array[i+1].x;
//     if (array[i].y==undefined) array[i].y=array[0].x;
//     console.log(a.operation.call(a));
// }
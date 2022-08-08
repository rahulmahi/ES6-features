// var obj = {
//     c : 'd',
//     'e-n' : 'f'
// }

// const { func } = require("prop-types");

// //dynamically value
// var key = 'c';
// var key1 = 'e-n'
// console.log(obj[key1]);
// //console.log(obj['e-n']);

// //call back
// function a(){

// }
// function f()
// {

//     a()
// }

// //promises


// function only(){ 
//     return new Promise (function (resolve,reject){
//        resolve();
//         console.log('val');
//     });
// }
// function fun(){ 
//     return new Promise (function (resolve,reject){
//         resolve()
//         console.log('val');
//     });
// }
// fun()
//  .then(only)
//  .then(function (){
//     console.log('empty');
//  })
//  .catch(function () {
//     console.log('hello');
//  });

// //async/await

// function wait() {
//     console.log('hii');

//     return new Promise((resolve, reject) => {
//          setTimeout( () => {
//             console.log('hello');
//             resolve('how are you')
//         }, 3000);
//         console.log('fabevy');
//     });
// }
// wait();

//  function s(data) {
//      console.log('hello', data);
// }
// s()
 //async function b() {
    // await wait()
//     s();
 //}
 //b()

// console.log(a);
// let a;


function a(){
    return new Promise((resolve,reject) => {
        setTimeout( () =>{
            resolve();
            console.log('first');
        },1000);
    })
}
function b(){
    return new Promise((resolve,reject) => {
        setTimeout( () =>{
            console.log('second');
           reject()
        },3000);
    })
}
function c(){
    return new Promise((resolve,reject) => {
        setTimeout( () =>{
            resolve();
        },5000);
    })
}


// a()
//  .then(b)
//  .then(c)
//  .then( () =>{
//     console.log('welcome');
//  })
//  .catch( () => {
//     console.log('reject');
//  })

 // async function r(){

    //     a()
    //    await b();
    //    c()
    
    // }
    
    // r()


    // var obj = {
    //     a:'b',
    //     c:'e'
    // };

    // var obj1 = obj;
    // obj1.a = 'd';

    // console.log(obj,obj1);

    //spread operator

    
    // var obj = {
    //     a:'b',
    //     c:'e'
    // };

    // var obj1 = {...obj};
    // obj1.a = 'd';

    // console.log(obj,obj1);

    // var arr = [2,3,4];

    // var arr1 = arr;

    // arr1[0] = 5;

    // console.log(arr,arr1);

    // var arr = [2,3,4];

    // var arr1 = [...arr];

    // arr1[0] = 5;

    // console.log(arr,arr1);

    //----hosting-------

    // let  a = 20;
    // console.log(a);

    
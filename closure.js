let f;
const g = function () {
  const a = 23;
  const b = 1;
   f = function () {
    console.log(a * 2);
    b;
  };
};



const h = function(){
    b;
    f = function(){
        console.log(b * 2);
    }
}

g();
f();
console.dir(f);
console.log('calling h()');
h();
f();
console.dir(f);



// let f;
// const g = function () {
//   const a = 23;
//   let b = 1;
//    f = function () {
//     console.log(a * 2);
//        console.log(b);
//     b++; 
//   };
// };

// g();
// console.dir(f);

// // console.log('calling f() first time');
// f();
// // console.dir(f);

// // console.log('calling f() second time');
// f();
// // console.dir(f);

// // console.log('calling f() third time');
// f();
// // console.dir(f);


// // console.dir(f);
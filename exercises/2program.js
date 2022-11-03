'use strict';

// Fulfill a promise

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("FULFILLED!")
  }, 300);
});

promise.then((result)=> console.log(result))
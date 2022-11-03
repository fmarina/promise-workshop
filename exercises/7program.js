// Promise after promise

const firstPromise = first();

const secondPromise = firstPromise.then((resultFirst) => second(resultFirst));

secondPromise.then(result => console.log(result));
// Shortcuts

const promiseResolved = Promise.resolve("Promise Resolved!")

const promiseRejected = Promise.reject(new Error("Promise Rejected!"))

promiseResolved.then(console.log)
promiseRejected.catch(error => console.log(error.message))
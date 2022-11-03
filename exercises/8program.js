// Values and promises 

const attachTitle = (title) => `DR. ${title}`

const promiseResolved = Promise.resolve("MANHATTAN")

promiseResolved.then(attachTitle).then(console.log)
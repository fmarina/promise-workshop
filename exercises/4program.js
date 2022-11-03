// To reject or not reject

const promise = new Promise((resolve, reject) => {
  resolve('I FIRED')
  reject(new Error('I DID NOT FIRE'))
})

const onResolved = (result) => console.log(result)
const onRejected = (error) => console.log(error.message)

promise.then(onResolved, onRejected)
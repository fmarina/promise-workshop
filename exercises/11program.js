// Multiple promises

const all = (promise1, promise2) => {
  const promise = new Promise((resolve, reject) => {
    let counter = 0;
    const arr = []
    
    promise1.then((value) => {
      arr[0] = value
      counter++
      if (counter === 2) resolve(arr)
    })
    
    promise2.then((value) => {
      arr[1] = value
      counter++
      if (counter === 2) resolve(arr)
    })
  })
  return promise
}

all(getPromise1(), getPromise2()).then(result => console.log(result))
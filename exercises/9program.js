// Throw and error

const parsePromised = (json) => {
  const promise = new Promise((resolve, reject) => {
    try {
      resolve(JSON.parse(json));
    } catch (error) {
      reject(error);
    }
  });
  return promise
}

const onReject = (error) => console.log(error.message);

parsePromised(process.argv[2]).then(() => {}, onReject);
// function waitFor(seconds, cb) {
//   if (isNaN(seconds) || seconds < 1) {
//     return cb(Error("Parameter 'seconds' must be a positive number!"));
//   }

//   setTimeout(function() {
//     cb(null, "Success!");
//   }, seconds * 1000);
// }


// waitFor(2, function(err, msg) {
//   if (err) {
//     console.log(err);
//     return;
//   }

//   console.log(msg);
// })


const waitFor = (res, rej) => {
  const promise = new Promise((resolve, reject) => {
      setTimeout((res) => {
          resolve('Success!');
          if (rej === -1) {
            reject('Uh, Oh');
          }
          return promise;
          
      }, 1000);
  });
 
};

// waitFor().then(text => {
//   console.log(text)
// }
// .catch(text2 => {
  
// }))



let p1 = new Promise((res, rej) => {
  setTimeout(_ => res('p1'), 1000)
})
let p2 = new Promise((res, rej) => {
  setTimeout(_ => rej(new Error('p2')), 2000)
})
let p3 = new Promise((res, rej) => {
  setTimeout(_ => res('p3'), 3000)
})

//Handled Rejected P2 using catch method since it will also return resolved promise
Promise.all([
  p1,
  // p2.catch(e => Promise.resolve(e) ), // or  p2.catch(e => e ),
  p3
]).then((data) => { console.log('--data--', data) })
  .catch((err) => { console.log('--err: ', err) })

const resolvebtn = document.querySelector("#resolve-btn");
const rejectbtn = document.querySelector("#reject-btn");


const p = new Promise((resolve, reject) => {
  resolvebtn.addEventListener("click", () => {
    resolve('promise Resolved');
  });
  rejectbtn.addEventListener("click", () => {
    reject('promise Rejected');
  });
});

p.then((data) =>{
    console.log('Resolved')
}).catch((error) => {
    console.log('error')
})

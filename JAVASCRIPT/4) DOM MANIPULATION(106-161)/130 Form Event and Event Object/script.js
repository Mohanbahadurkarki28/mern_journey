/* const usernameInput = document.querySelector('#username')
usernameInput.addEventListener('input', (e)=>{
    console.log(e)
    console.log('input event fired')
}) */

/* const usernameInput = document.querySelector('#username')
usernameInput.addEventListener('change', (e)=>{
    console.log(e)
    console.log('input event fired')
}) */


/* 
const usernameInput = document.querySelector("#username");
usernameInput.addEventListener("focus", (e) => {
  console.log(e);
  console.log("input event fired");
}); */



const usernameInput = document.querySelector("#username");
usernameInput.addEventListener("blur", (e) => {
  console.log(e);
  console.log("input event fired");
});


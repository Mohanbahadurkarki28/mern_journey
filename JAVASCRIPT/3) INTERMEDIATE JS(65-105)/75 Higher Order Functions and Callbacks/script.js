//Higher order function
function a(b) {
    console.dir('b')
    b()
}

/* a('hiiii')
a({ username: 'Mohan', userAge : 50})
a([1,7,8,9]) */

function sayHi(){
    console.log('Hello')
}
a(sayHi)


//call back function
a(function(){
    console.log('Hiiiiiiiiiiii')
})
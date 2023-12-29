// document.addEventListener('click', function () {
//     console.log("click on the heading");
// })

// document.addEventListener('hover', function () {
//     console.log("this is over")
// })

function events() {
    console.log("this is our functions");
}

document.addEventListener('click', events);
document.removeEventListener('click', events);
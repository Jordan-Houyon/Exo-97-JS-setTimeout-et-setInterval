let button = document.getElementById('timeout')
button.innerHTML = 'waiting';


button.addEventListener("click", function () {
    setTimeout(function () {
        let myDiv = document.createElement('div')
        myDiv.innerHTML = "div creer par le timeout 2 secondes apres le click"
        myDiv.style.backgroundColor = "cornflowerblue"
        document.getElementById('timeout-div').appendChild(myDiv)
    }, 2000)
})

let button2 = document.getElementById('interval-start')
button2.innerHTML = "start"
let button3 = document.getElementById('interval-stop')
button3.innerHTML = "stop"

button2.addEventListener("click", function () {
    let b = 0
    let interval = setInterval(function () {
        button3.addEventListener("click", function () {
            clearInterval(interval)
        }, 1000)
        let myDiv2 = document.getElementById('interval-div')
        myDiv2.innerHTML = b;
        b++;
    })}
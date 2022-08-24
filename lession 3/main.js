/* document.querySelector(".black").innerHTML = '<b>BLACK</b>'

let inputIN = document.querySelector(".text-in")
let button = document.querySelector(".check-in")
let div = document.querySelector(".result")

button.onclick = function() {
    console.log("ДА")

    console.log(inputIN.value)

    let e = +inputIN.value

    console.log(e)

    let h = e + 15
    console.log(h)

    div.innerHTML = h
}

let myhappy = prompt("твой год?(2006)")
console.log(myhappy)

if (myhappy == 2006) alert("kryto")

if (myhappy > 2000) {
    alert("welcome")
    alert("administrator")
}

if (myhappy == 2006) {
    alert("true")
} else {
    alert("false")
} */

document.querySelector(".black").innerHTML = '<b>2 + 2 = ?</b>'

let inputIN = document.querySelector(".text-in")
let button = document.querySelector(".check-in")
let div = document.querySelector(".result")
let a = +inputIN.value

button.onclick = function() {
    a = +inputIN.value
if (a == 4) {
    console.log(a)
    alert("Правильно"); 

} if (a < 4) {
     alert("Неправильно")
} if (a > 4) {
    div.innerHTML = a
}
  
}


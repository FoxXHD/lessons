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

                // дз

/* document.querySelector(".black").innerHTML = '<b>2 + 2 = ?</b>'

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
  
} */

/* let year = prompt('Когда вышел джоджо(2004)')
if (year < 2004) {
    alert("рано")
} else if (year > 2004) {
    alert("поздно")
} else {
    alert("pravilno")
} */

/* let sun
let week = prompt("сколько недель летом? (12)")
if (week == 12) {
    sun = true
} else {
    sun = false
}

console.log(sun) */

//let result = условие ? значение1 : значение2 
//синтаксис оператора "?"

/* let week = prompt("сколько недель летом? (12)")
let sun = (week == 12) ? true : false
console.log(sun) */

 // || - или
//result = a || b

/* alert(true || true) //true
alert(true || false) //true
alert(false || true) //true
alert(false || false) //false */

/* let season = 6
if (season < 1 || season > 10) {
    alert("serik boom")
} */

/* && (И)
result = a && b
alert(true && true) //true
alert(false && true) //false
alert(true && false) //false
alert(false && false) //false */

/* ! (НЕ)
result = !value
alert(!true) //false
alert(!0) //true */



  // занятие 4 (дз) 

console.log(21 % 2) //остаток от деления числа
console.log(3 ** 4) //степени
console.log(10 < 4) // A меньше B
console.log(10 > 4) // A больше B
console.log("15" > 10) //тоже самое, но с переводом типов данных
console.log(0 == false) // "JS не различает ноль и false"
console.log(12 > 0) // пример 1
console.log(0 > 21) // пример 2
console.log("1" == 1) // обычное равенство
console.log("1" === 1) //жесткое равество, которое не переводит тип данных в числовой
console.log(10 != 5) // A не-равна B
console.log(1 != 1) // в случае, если числа равны, ответом будет "false"

//приколы с ||, &&, !.

 //   ||
let A = 25    // или 1,10
if (A < 1 || A > 15) {
    alert("correct 1")
}

// &&
let B = 10
if (B > 5 && B == 10) {
    alert("correct 2")
}

// !
let C = 10
if (C != 15) {
    alert ("correct 3")
}
/* switch(a) {
    case "Значение 1"
    ...
    break

    case "значение 2"
    ...
    break
    и т.д.
}
 */


let C = 0

/* switch(B) {
    case 3:
        alert("Мало")
        break
    case 9:
        alert("OK")
        break
    case 6:
        alert("много")
        break
    default:
        alert("No Nut November")
} */

/* switch(+B) {
    case C + 3:
        alert ("result")
        break
    default:
        alert("corr")
} */
                            // у switch case строгая проверка

/* switch(B) {
    case 1: // обьединение кейсов
    case 2:
    case 3:
    case 4:
        alert("no")
        break
    case 10:
        alert("bruh")
        break
    default:
        alert("bruhamed")
} */

/* let A = prompt("Ввод числа")

switch(A) {
    case "1":
        alert("yeeeee")
        break
    case 2:
        alert("yeeep")
        break
    default:
        alert("bruhamed")
} */

/* a ?? b // оператор нулевого слияния 
result = (a !== null && a !== undefined) ? a : b // alt syntax
 */

/* let user = null
let phone = undefined
let email = "justys"
alert (user ?? phone ?? email ?? "ladno") */ // можно использовать "||"

//    ДЗ

/* let num = prompt ("Ввод числа")
if (num == 0) {
    console.log(0)

}
if (num == 15) { 
    console.log(15)
    
}
if (num == 26) {
    console.log(26)
    
}
if (num == 150) {
    console.log(150)
    
} */
 //адаптировать к switch case

 let A = prompt ('Ввод числа')
 switch(A) {
    case '0':  // string
        console.log(0)
        break
    case '15':  // string
        console.log(15)
        break
    case '26':  // string
        console.log(26)
        break
    case '150':  // string
        console.log(150)
        break
    default:
        alert("null") //лично мне легче определить ошибку

 }
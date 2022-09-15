/* let func1 = document.querySelector(".btn-1")



function one() {
    console.log("hi")
}

one()

func1.onclick = one */

/* function one() {
    console.log("hi")
    return 123
}

one()
console.log (one() + 15) */

/* function multi() {
    console.log(a * b)
    c = a * b
}

multi()
console.log(c* 55) */

//dz

/* первую часть задания я не смог сделать, искал в интернете подобия дз,
дабы подчеркнуть что-либо оттуда - нет результата, (а я, на момент написания,
    отстаю на 5 уроков, а я знаю, что в один момент просто не вытяну долги
    ) */

 let a = 5
 let b = 4
 
 let ymn1 = document.querySelector(".ymn")

 let del1 = document.querySelector(".del")

 let ply1 = document.querySelector(".ply")

 let min1 = document.querySelector(".min")



ymn1.onclick = function ymn() {
    console.log(a * b)
}

del1.onclick = function del() {
    console.log(a / b)
}

ply1.onclick = function ply() {
    console.log(a + b)
}

min1.onclick = function min() {
    console.log(a - b)
}

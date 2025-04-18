let x = 5;
let y = "5";
console.log(x==y)
console.log(x===y)

let b = 4;
let k = 10;
// this means the current value of b + 5
b += 5; 
console.log("The incremental value of b is " + b)

k -= 4;
console.log("This is the value of k decreased" + " " + k)

let g = 20;
let p = 10;
p %= 5;
console.log(p)

g *= p;
console.log(g)

//this means 2 to the power of 3
let v = 2 ** 3;
console.log(v)

v **= 2;
console.log("this is the current value of v to the power of 2" + "; " + v)


let bean = 8;
let nash = 9;
console.log(bean>6&&nash>bean)

//x &&= y	x = x && (x = y)

bean &&= nash;
console.log("Im testing" + "  " + bean)

bean = bean && (bean = nash)
console.log(bean)

nash ||= bean;
console.log(nash)

let defaultValue = 6;
// let value;
let value = 2;
let result = value ?? defaultValue;
console.log(result)

//Nullish operator
let r = 24;
// let r = null;
let d = 12;
let output = r ?? d;
console.log(output)

r ??= d;
console.log(r)








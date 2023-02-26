let a = "" + 1 + 0 // "10"
let b = "" - 1 + 0 // "-1"
let c = true + false // 1
let d = 6 / "3" // 2
let e = "2" * "3" // 6
let f = 4 + 5 + "px" // "9px"
let g = "$" + 4 + 5 // "$45"
let h = "4" - 2 // 2
let k = "4px" - 2 // NaN
let l = "  -9  " + 5 // "  -9  5"
let m = "  -9  " - 5 // -14
let n = null + 1 // 1
let o = undefined + 1 // NaN
let p = " \t \n" - 2 // -2

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);
console.log(h);
console.log(k);
console.log(l);
console.log(m);
console.log(n);
console.log(o);
console.log(p);
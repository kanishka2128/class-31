var ob = "example"
console.log(ob+ "=" + typeof(ob))

var ob = "11"
console.log(ob+ "=" + typeof(ob))

var x = 45
console.log(x+ "=" + typeof(x))

var ob1 
console.log(ob1+ "=" + typeof(ob1))

var a = [ 10,20,30,40,80]
console.log(a)
console.log(a.length)
a.push(55)
a.push(66)
a.push(77)
console.log(a.length)
console.log(a)
console.log(a.pop())
console.log(a)
for (var i = 0; i < a.length; i++){
    console.log(a[i])
}
var a = [[10,20],[30,40],[50,60]]
console.log(a)
console.log(a[0][1])
console.log(a[2][1])
for (var i = 0; i < a.length; i++) {
    console.log (a[i][0]+ " " + a[i][1])
}
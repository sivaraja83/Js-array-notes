console.log("Array Operations")
let arr = ["Html","css","Js","React"]

//access elements in array
for(let i=0;i<arr.length;i++){
    console.log(arr[i].toUpperCase())
}

//for of
console.log("Special loop for Array")
for(let lang of arr){
    console.log(lang)
}

//access object elements using for
console.log("Object operations :-")
let myobject  = {
    name : "Siva",
    Degree : "B.E",
    dept : "Cse",
    cgpa : 7.4
}

for(let key in myobject){
    console.log(`${key} : ${myobject[key]}`)
}
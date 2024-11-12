let ourObject = {
    "name": "clara",
    "profession": "student",
    "age": 21,
    "pets":[{name:'Luna', type: 'dog', age: 5, unit:'years'}]
}
console.log(ourObject);

let myData = {};
function fethchData(){
fetch('https://catfact.ninja/fact')
.then(res =>{
    if(res.ok){
        return res.json();        
    }
    else{
        console.log(res);
    }
}).then(res => {
    myData =res;
    console.log(myData ["fact"]);
    document.getElementById("fact").innerHTML = myData.fact;
})
.catch(error => {console.log(error)})
}
fethchData();

document.getElementById("generate").addEventListener("click", e=> {fethchData();})
console.log(myData);


let name ="Clara"
let myString = "hello ${name}!"
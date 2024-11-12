let ourObject = {
    "name": "clara",
    "profession": "student",
    "age": 21,
    "pets":[{name:'Luna', type: 'dog', age: 5, unit:'years'}]
}
console.log(ourObject);

let myData = {};
function fethchData(){
fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single')
.then(res =>{
    if(res.ok){
        return res.json();        
    }
    else{
        console.log(res);
    }
}).then(res => {
    myData =res;
    console.log(myData ["joke"]);
    document.getElementById("joke").innerHTML = myData.joke;
})
.catch(error => {console.log(error)})
}
fethchData();

document.getElementById("generate").addEventListener("click", e=> {fethchData();})
console.log(myData);


let name ="Clara"
let myString = "hello ${name}!"
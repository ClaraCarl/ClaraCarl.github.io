let myData = {};
function fetchData(){
    const comicNumber = Math.floor(Math.random() * 3000) + 1;
fetch('https://corsproxy.io/?https://xkcd.com/${comicNumber}/info.0.json')
.then(res =>{
    if(res.ok){
        return res.json();        
    }
    else{
        console.log(res);
    }
}).then(res => {
    myData =res;
    console.log(myData);
    // title
    document.getElementById("title").innerHTML = myData.title;

    // display the comic
    document.getElementById("comic").src = myData.img;
    //alt text
    document.getElementById("comic").alt = myData.alt;

    const releaseDate = `${data.month}/${data.day}/${data.year}`;
    document.getElementById("date").innerText = `Published on: ${releaseDate}`;
})
.catch(error => {console.log(error)})
}
fetchData();

document.getElementById("generate").addEventListener("click", e=> {fetchData();})
console.log(myData);


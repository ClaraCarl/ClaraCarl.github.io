console.log(document.getElementById("my_head")); 

document.getElementById("bar_taco_header").addEventListener("click", function(e) {
    alert("clicked the h3");
    
=    document.getElementById("paragraph").style.color = "blue";

    let image = document.getElementById("imageUrl");
    
    if (!image) {
        image = document.createElement("p"); 
        image.id = "imageUrl"; 
        image.style.color = "blue"; 
        document.body.appendChild(imageUrlElement); 
    
    image.innerHTML = `<a href="https://bartaco.com/location/boulder/" target="_blank">Open the website</a>`;
});

document.getElementById("restaurant-image").addEventListener("click", function(e) {
    const description = document.getElementById("description");
    description.textContent = "Lay-back restaurant with cheap tacos";
    description.style.display = "block";
    description.style.float = "right";
    description.style.marginLeft = "10px";
});
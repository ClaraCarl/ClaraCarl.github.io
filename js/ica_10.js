let my_var = 100;
var my_other_var = "hello world";
const this_is_a_constant = "constant";
console.log(my_other_var);
my_other_var += "!";
//alert(my_other_var)//

console.log(document.getElementById("my_head"));
document.getElementById("my_head").addEventListener("click", function(e){
    alert("clicked the h1");
    document.getElementById("paragraph").innerHTML = "this is new text";
    document.getElementById("paragraph").style.color = "blue";
    document.getElementById("image").src = "images/unicorns/unicorn (2).png";
})
alert("this is my alert");
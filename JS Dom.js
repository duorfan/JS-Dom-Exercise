const firstElements = document.getElementsByTagName("p");
const firstCount = firstElements.length;
console.log("There are " +firstCount+" paragraph tags on this page.");
function myFunction1(){
    document.getElementById("first").innerHTML = firstCount;
}


const secondCount = document.querySelectorAll("#pick p").length;
function myfunction2(){
    document.getElementById("second").innerHTML = secondCount;
}

const thirdElements = document.getElementsByID("choose");
const thirdCount = thirdElements.length;
function myfunction3(){
document.getElementById("third").innerHTML = thirdCount;
}
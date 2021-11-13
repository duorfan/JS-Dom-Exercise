const firstElements = document.getElementsByTagName("p");
const firstCount = firstElements.length;
console.log("There are " +firstCount+" paragraph tags on this page.");

document.getElementById.listenTo('click', () => {
    myFunction1()
 });

function myFunction1(){
    document.getElementById("first").innerHTML = firstCount;
}

const secondCount = document.querySelectorAll("#pick p").length;
document.getElementById.listenTo('click', () => {
    myfunction2()
 });
function myfunction2(){
    document.getElementById("second").innerHTML = secondCount;
}

const thirdElements = document.getElementsByID("choose");
document.getElementById.listenTo('click', () => {
    myfunction3()
 });
const thirdCount = thirdElements.length;
function myfunction3(){
document.getElementById("third").innerHTML = thirdCount;
}
let nameElement = document.getElementById("name")
let collegeNameElement = document.getElementById("collegename")
let locationElement = document.getElementById("location")
let pictureElement = document.getElementById("picture")
let btnElement = document.getElementById("btn");
let outputElement = document.getElementById("output");

let  nameIdElement = document.getElementById("nameid")
let collegeNameIdElement = document.getElementById("collegenameid")
let locationIdElement = document.getElementById("locationid")

btnElement.addEventListener("click", ()=>{
    nameIdElement.textContent = nameElement.value;
    collegeNameIdElement.textContent = collegeNameElement.value;
    locationIdElement.textContent = locationElement.value;
    outputElement.src = pictureElement.value;
})





const buy = document.querySelectorAll(".js-btn");
console.log((buy))
const aywaa = document.querySelectorAll(".aywaa")[1];
const youtube = document.getElementById("you");

const biggerContainer = document.querySelector(".bigger-contaier");

const kahyaan = document.getElementById("kahyaan")
const visa = document.getElementById("visa")

buy.forEach(e => {
  e.addEventListener("click", (eo) => {
    biggerContainer.classList.add("active");
    eo.preventDefault();
  
    kahyaan.style.display = "none"
  
    visa.style.display = "block"
  
  }); 
});



aywaa.forEach(e => {
  e.addEventListener("click", (eo) => {
    // biggerContainer.classList.remove("active");
  
    kahyaan.style.display = "block"
    visa.style.display = "none"
  
  
  
  setTimeout(() => {
    
    kahyaan.style.display = "none"
    biggerContainer.classList.remove("active");
  
  }, 3000);
  
  
  })
});



youtube.addEventListener("click", (eo) => {
    eo.preventDefault()
})



const dark = document.getElementById("dark")
const body = document.getElementById("body")


dark.addEventListener("click", (eo) => {
  
  body.classList.toggle("dark")


})

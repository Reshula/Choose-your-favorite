AOS.init({
    duration: 2000,
  })
 gsap.from(".heading",  {x:20,opacity: 0, duration: 1.5, ease: "elastic"});






const field = document.querySelector("#field");
const divs = document.querySelectorAll(".recipe");

field.addEventListener("keyup", (event) =>{
    const word = event.target.value.toLowerCase();
    

divs.forEach(item =>{
    item.querySelector("p").textContent.toLowerCase().includes(word) ? (item.style.display= "block") : (item.style.display = "none")
})

})
let main = document.querySelector("#main")
let crsr = document.querySelector(".cursor")

main.addEventListener("mousemove", (te)=>{
   
    crsr.style.left = te.x + "px"
    crsr.style.top = te.y + "px"
    
})

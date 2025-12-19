let istatus = document.querySelector("h5")

let addfriend = document.querySelector("#add")

let check = 0


addfriend.addEventListener("click", function(){
  if(check==0){
    istatus.innerHTML="Friends";
    istatus.style.color = "green";
    addfriend.innerHTML ="Remove friend"
    check = 1;
  }
  else{
    istatus.innerHTML="Stranger";
    istatus.style.color = "red";
    addfriend.innerHTML ="Add friend";
   
    check=0;
  }
    
    
     
})

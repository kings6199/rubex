const a=document.getElementById("well");
const b = document.getElementById("success");
const c = document.getElementById("xmass-popup");
const d = document.getElementsByClassName("close");
    
a.addEventListener('click',function(){

  
  b.style.display = "block";
  c.style.display = "none";
  
  

});
d.addEventListener('click',function(){

  
    b.style.display = "none";
    

    
    
  
  });
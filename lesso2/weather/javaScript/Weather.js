 const d = "Last Updated"+":" + new Date();
document.getElementById("demo").innerHTML = d;  
        
function toggleMenu(){
      document.getElementById("primaryNav").classList.toggle("open");
      document.getElementById("hamurgerBtn").classList.toggle("open");
 }
      const x = document.getElementById("hamurgerBtn")
                 x.onclick = toggleMenu;
         /*function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamurgerBtn").classList.toggle("open");
    }
    const x = document.getElementById("hamurgerBtn")
     x.onclick = toggleMenu;

     const d = "Last Updated"+":" + new Date();
     document.getElementById("demo").innerHTML = d; */
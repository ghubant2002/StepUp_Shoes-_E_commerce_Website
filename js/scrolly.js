                                                     //logo//
function myHeader(){
    let header = document.getElementById("header");
    let lol = document.getElementById("lol");
    window.addEventListener("scroll" , function(){
        if(window.scrollY > 0){
            
            header.classList.add("active")
            lol.src = "#";
            
        }
       
        else
        {
            header.classList.remove("active");
            lol.src = "images/logo.png";

        }
           
        
    })
}
myHeader();






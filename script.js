 var tool = document.querySelector(".tool")
 var text = document.querySelector(".text")

 text.addEventListener("mousemove",function(dets){
    tool.style.visibility = "visible";
    tool.style.left =  dets.x +20 + "px";
    tool.style.top = dets.y +20 + "px";
    
 })

 text.addEventListener("mouseleave",function(){
    tool.style.visibility = "hidden";

 })
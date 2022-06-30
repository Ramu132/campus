 function show() {
    let x=document.getElementById("nav");
    x.style.top="0rem";
    x.style.zIndex="1"
    x.style.position="relative"
    x.style.opacity="1"
    
}
function hide() {
    let y=document.getElementById("nav")
    y.style.top="-36rem"
    y.style.position="absolute"
    y.style.zIndex="-1"
    y.style.opacity="0"
    
}


//Dark mode
function dark() {
    let z=document.getElementById("body");
    z.style.backgroundColor="rgb(20, 20, 20)"
    let l=document.getElementById("body")
    l.style.color="white";
    let r =document.getElementsByClassName('color-white');
   for(let x=0; x<r.length; x++){
       r[x].style.color="white";
   }
}

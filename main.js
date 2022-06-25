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
function nextPage(pageNumber){

// Hide all pages
document.querySelectorAll(".page").forEach(page=>{
page.classList.remove("active");
});

// Show selected page
document.getElementById("page"+pageNumber).classList.add("active");

// Smooth scroll to top
window.scrollTo({
top:0,
behavior:"smooth"
});

}

/* Optional sparkle effect */

function createSparkle(){

const sparkle=document.createElement("div");

sparkle.style.position="fixed";
sparkle.style.width="4px";
sparkle.style.height="4px";
sparkle.style.background="white";
sparkle.style.borderRadius="50%";

sparkle.style.left=Math.random()*window.innerWidth+"px";
sparkle.style.top=Math.random()*window.innerHeight+"px";

sparkle.style.boxShadow="0 0 10px white";

sparkle.style.opacity="1";

sparkle.style.pointerEvents="none";

document.body.appendChild(sparkle);

let opacity=1;

const fade=setInterval(()=>{

opacity-=0.02;

sparkle.style.opacity=opacity;

if(opacity<=0){

clearInterval(fade);

sparkle.remove();

}

},50);

}

setInterval(createSparkle,500);

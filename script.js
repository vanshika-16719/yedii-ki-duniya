function nextPage(page){

document.querySelectorAll(".page").forEach(p=>{
p.classList.remove("active");
});

document.getElementById("page"+page)
.classList.add("active");

window.scrollTo({
top:0,
behavior:"smooth"
});

}

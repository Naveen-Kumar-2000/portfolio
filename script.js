var loader=document.getElementById("preloader");
window.addEventListener("load",function(){
    loader.style.display="none";
})




const menuBtn=document.querySelector('#menu-btn');
const closeBtn=document.querySelector('#close-btn');

const menu = document.querySelector('nav .container ul');

menuBtn.addEventListener('click',() => {
     menu.style.display='block';
     menuBtn.style.display='none';
     closeBtn.style.display='inline-block';
})
//hide menu 

closeBtn.addEventListener('click',() => {
     menu.style.display='none';
     menuBtn.style.display='inline-block';
     closeBtn.style.display='none';
})


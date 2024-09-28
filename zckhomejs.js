document.addEventListener('DOMContentLoaded', ()=>{
    const sidenav = document.querySelector('.side-nav');
    const btnnav = document.querySelector('#btnnav');
    const overlayscreen = document.querySelector('.nav-overlay');

    btnnav.addEventListener('click',()=>{
sidenav.classList.add('open');


    });

    overlayscreen.addEventListener('click',()=>{
sidenav.classList.remove('open');
    });
});
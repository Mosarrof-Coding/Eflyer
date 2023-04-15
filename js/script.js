let sm_mdNav = document.querySelector('.sm_sm_navbar');
let togglaar = document.querySelector('.togglaar');
let close = document.querySelector('.close');

togglaar.addEventListener('click', ()=>{
    sm_mdNav.classList.add('smnv');
})
close.addEventListener('click', ()=>{
    sm_mdNav.classList.remove('smnv');
})
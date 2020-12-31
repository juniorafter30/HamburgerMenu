// General variables
const burger = document.querySelector('.burger'); // burger
const nav = document.querySelector('nav'); // the whole navigation
const openClass = document.querySelector('.fa-bars') // opening sign
const closeClass = document.querySelector('.fa-times-circle') // closing sign

// function for rolling out and in 

const active = () => {
    nav.classList.toggle('active');
    burger.classList.toggle('active');
   
    if(burger.classList.contains('active')){
        openClass.classList.add('hide');
        closeClass.classList.remove('hide');


    }else{
        openClass.classList.remove('hide');
        closeClass.classList.add('hide');
    };
    
  
};

addEventListener('click', active)

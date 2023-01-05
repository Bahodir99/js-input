var elname = document.querySelector('.name');
var elbtn = document.querySelector('.btn');
var eltext = document.querySelector('.text');



elbtn.addEventListener('click', function(){
    if(elname.value.trim().toLowerCase() == 'bahodir'){
        eltext.textContent = 'Assalomu aleykum'
    }
    else{
        eltext.textContent = 'Kechirasiz qayta kiriting'
    }
})


var elopen = document.querySelector('.btn__open');
var elmodal = document.querySelector('.modal');
var elclose = document.querySelector('.btn__close');


elopen.addEventListener('click', function(){
    elmodal.classList.add('open')
})

elclose.addEventListener('click', function(){
    elmodal.classList.remove('open')
})
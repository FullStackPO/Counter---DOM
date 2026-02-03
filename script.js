let inc = document.querySelector('#inc');
let con = document.querySelector('#con');
let dece = document.querySelector('#dece');
let reset = document.querySelector('#reset');
let a = 0;
inc.addEventListener('click', function(){
    a++;
    con.innerHTML = a;
})

dece.addEventListener('click', function(){
    a--;
    con.innerHTML = a;
})

reset.addEventListener('click', function(){
    a = 0;
    con.innerHTML = a;
})
let inc = document.querySelector('#inc');
let con = document.querySelector('#con');
let dece = document.querySelector('#dece');
let a = 0;
inc.addEventListener('click', function(){
    a++;
    con.innerHTML = a;
})

dece.addEventListener('click', function(){
    a--;
    con.innerHTML = a;
})
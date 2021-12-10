let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2")
let btn3 = document.getElementById('btn3')
let para = document.querySelector(".para");
let para1 = document.getElementById('para1');
let para2 = document.getElementById('para2') 
btn1.addEventListener("click",function () {
    para.classList.toggle('abc')
    
    para1.classList.remove('abc');
    para2.classList.remove('abc');    
    
   
})
btn2.addEventListener('click',function () {
    para1.classList.toggle('abc')

    para.classList.remove('abc');
    para2.classList.remove('abc');
})
btn3.addEventListener('click',function () {
    para2.classList.toggle('abc')

    para.classList.remove('abc');
    para1.classList.remove('abc');
})
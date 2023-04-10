document.querySelector(".btn7") .addEventListener("click", function(){
    document.querySelector(".value").value +=7
});

document.querySelector(".btn8").addEventListener("click",function(){
    document.querySelector(".value").value +=8
});

document.querySelector(".btn9").addEventListener("click",function(){
    document.querySelector(".value").value +=9
});

document.querySelector(".btndiv").addEventListener("click",function(){
    document.querySelector(".value").value +="/"
});

document.querySelector(".btn4").addEventListener("click",function(){
    document.querySelector(".value").value +=4
});

document.querySelector(".btn5").addEventListener("click",function(){
    document.querySelector(".value").value +=5
});

document.querySelector(".btn6").addEventListener("click",function(){
    document.querySelector(".value").value +=6
});

document.querySelector(".btnmul").addEventListener("click",function(){
    document.querySelector(".value").value +="*"
});

document.querySelector(".btn1").addEventListener("click",function(){
    document.querySelector(".value").value +=1
});

document.querySelector(".btn2").addEventListener("click",function(){
    document.querySelector(".value").value +=2
});

document.querySelector(".btn3").addEventListener("click",function(){
    document.querySelector(".value").value +=3
});

document.querySelector(".btnmin").addEventListener("click",function(){
    document.querySelector(".value").value += "-"
});

document.querySelector(".btn0").addEventListener("click",function(){
    document.querySelector(".value").value +=0
});

document.querySelector(".btndot").addEventListener("click",function(){
    document.querySelector(".value").value +="."
});

document.querySelector(".btnadd").addEventListener("click",function(){
    document.querySelector(".value").value +="+"
});



document.querySelector(".btneq").addEventListener("click",function(){
    document.querySelector(".value").value = eval(document.querySelector(".value").value )
});

document.querySelector(".clear").addEventListener("click",function(){
    document.querySelector(".value").value = ""
});

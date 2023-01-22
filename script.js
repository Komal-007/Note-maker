var txt1=""
//delete
function del1(){
    window.localStorage.removeItem("tx1")
    var ar=document.getElementById("txt1")
    ar.value=""
}
function del2(){
    window.localStorage.removeItem("tx2")
    var ar=document.getElementById("txt2")
    ar.value=""
    var ar=document.getElementById("div2")
    ar.hidden=true
}
function del3(){
    window.localStorage.removeItem("tx3")
    var ar=document.getElementById("txt3")
    ar.value=""
    var ar=document.getElementById("div3")
    ar.hidden=true
}
function del4(){
    window.localStorage.removeItem("tx4")
    var ar=document.getElementById("txt4")
    ar.value=""
    var ar=document.getElementById("div4")
    ar.hidden=true
}
function del5(){
    window.localStorage.removeItem("tx5")
    var ar=document.getElementById("txt5")
    ar.value=""
    var ar=document.getElementById("div5")
    ar.hidden=true
}
function del6(){
    window.localStorage.removeItem("tx6")
    var ar=document.getElementById("txt6")
    ar.value=""
    var ar=document.getElementById("div6")
    ar.hidden=true
}function del7(){
    window.localStorage.removeItem("tx7")
    var ar=document.getElementById("txt7")
    ar.value=""
    var ar=document.getElementById("div7")
    ar.hidden=true
}
function del8(){
    window.localStorage.removeItem("tx8")
    var ar=document.getElementById("txt8")
    ar.value=""
    var ar=document.getElementById("div8")
    ar.hidden=true
}

//new
function new2(){
    var val=document.getElementById("div2")
    val.hidden=false
    
}
function new3(){
    var val=document.getElementById("div3")
    val.hidden=false
    
}
function new4(){
    var val=document.getElementById("div4")
    val.hidden=false 
    
}
function new5(){
    var val=document.getElementById("div5")
    val.hidden=false
    
}
function new6(){
    var val=document.getElementById("div6")
    val.hidden=false
    
}
function new7(){
    var val=document.getElementById("div7")
    val.hidden=false
    
}
function new8(){
    var val=document.getElementById("div8")
    val.hidden=false 
    
}
function new9(){
    alert("Sorry!,\n you have exceeded the number of notes to be used.")
    
}

//save
function tick1(){
    var val=document.getElementById("txt1")
    
    txt1=val.value
    localStorage.setItem("tx1",txt1)
console.log(val.value)
}
function tick2(){
    var val=document.getElementById("txt2")
    
    txt1=val.value
    localStorage.setItem("tx2",txt1)
console.log(val.value)
}
function tick3(){
    var val=document.getElementById("txt3")
     
    txt1=val.value
    localStorage.setItem("tx3",txt1)
console.log(val.value)
}
function tick4(){
    var val=document.getElementById("txt4")
     
    txt1=val.value
    localStorage.setItem("tx4",txt1)
console.log(val.value)
}
function tick5(){
    var val=document.getElementById("txt5")
     
    txt1=val.value
    localStorage.setItem("tx5",txt1)
console.log(val.value)
}
function tick6(){
    var val=document.getElementById("txt6")
     
    txt1=val.value
    localStorage.setItem("tx6",txt1)
console.log(val.value)
}
function tick7(){
    var val=document.getElementById("txt7")
     
    txt1=val.value
    localStorage.setItem("tx7",txt1)
console.log(val.value)
}
function tick8(){
    var val=document.getElementById("txt8")
     
    txt1=val.value
    localStorage.setItem("tx8",txt1)
console.log(val.value)
}

//refresh
window.onload=function(){
    var ar=document.getElementById("txt1")
    ar.innerHTML=localStorage.getItem('tx1')

    var ar=document.getElementById("txt2")
    ar.innerHTML=localStorage.getItem('tx2')
    if (ar.value!=""){
        var val=document.getElementById("div2")
        val.hidden=false
       
    }
    
    var ar=document.getElementById("txt3")
    ar.innerHTML=localStorage.getItem('tx3')
    if (ar.value!=""){
        var val=document.getElementById("div3")
        val.hidden=false
       
    }
    var ar=document.getElementById("txt4")
    ar.innerHTML=localStorage.getItem('tx4')
    if (ar.value!=""){
        var val=document.getElementById("div4")
        val.hidden=false
       

    }
    var ar=document.getElementById("txt5")
    ar.innerHTML=localStorage.getItem('tx5')
    if (ar.value!=""){
        var val=document.getElementById("div5")
        val.hidden=false
       

    }
    var ar=document.getElementById("txt6")
    ar.innerHTML=localStorage.getItem('tx6')
    if (ar.value!=""){
        var val=document.getElementById("div6")
        val.hidden=false
       

    }
    var ar=document.getElementById("txt7")
    ar.innerHTML=localStorage.getItem('tx7')
    if (ar.value!=""){
        var val=document.getElementById("div7")
        val.hidden=false
       

    }
    var ar=document.getElementById("txt8")
    ar.innerHTML=localStorage.getItem('tx8')
    if (ar.value!=""){
        var val=document.getElementById("div8")
        val.hidden=false
       

    }
}
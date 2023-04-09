let elem =document.querySelectorAll(".border-container")
let e = document.querySelectorAll(".input")
let p = document.querySelectorAll(".placeholder")

elem.forEach((t,i) => {
    t.addEventListener("click",() => {
        e[i].focus();
    
    })

})

e.forEach((t,i) => {
    t.addEventListener("keydown" , () => {
        if(t.value.length > 0){
            p[i].classList.add("input-active")
        }
        else {
            p[i].classList.remove("input-active")
        }
    })


})


$(document).ready(function(){

    $('.inp-no').payment('formatCardNumber');

    $('.inp-exp').payment('formatCardExpiry');
    $('.inp-cvv').payment('formatCardCVC');
   change(".inp-exp","#exp")
    change_name(".inp-no","#no")
   change_name(".inp-name","#name")
   change_name(".inp-cvv" , ".cvv")
    
})

function change_name(inp,target){
    $(inp).keyup((e) => {
        $(target).text(e.target.value)

    })
}


function change(inp,target) {
    $(inp).keyup((e) => {
        let cur  = fill(e.target.value,9,"-")
        
        cur =cur.substring(0,3) + '/' + cur.substring(4)
        console.log(cur)
        
        $(target).text(cur)
    })
}

function fill(txt,len,p){
    if(txt.length < len){
        txt += p.repeat(len - txt.length)
    }
    return txt
}

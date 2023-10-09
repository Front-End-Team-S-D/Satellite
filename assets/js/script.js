// ================ onload menuTop ========================

let spanMenuTop3 = document.querySelectorAll('.menuTop>li:nth-of-type(3)>span')
let liMenuTop = document.querySelectorAll('.menuTop>li')
liMenuTop.forEach(function(val){
    let spanWidth = val.querySelectorAll('span')
    // console.log(span);
    spanWidth.forEach(function(val){
        val.style.width = '0'
    })
    val.addEventListener('mouseenter', ()=>{
        spanWidth.forEach(function(val){
            val.style.width = '50%'
        })
    })
    val.addEventListener('mouseleave', ()=>{
        spanWidth.forEach(function(val){
            val.style.width = '0'
        })
    })
})
window.addEventListener('load', function(){
    spanMenuTop3.forEach(function(val){
        val.style.width = '50%'
    })
})


// =============================================================
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


// ======================= onload header ============================

let header = document.getElementsByClassName('headerTop')[0]
let headerText1 = document.getElementsByClassName('header-text1')[0]
let headerText2 = document.getElementsByClassName('header-text2')[0]
let _main = document.getElementsByTagName('main')[0]
_main.addEventListener('scroll', function(){
    let sctopHeader  = _main.scrollTop
    let heightHeader = header.clientHeight
    console.log(heightHeader);
    let headertextTop = headerText1.computedStyleMap().get('top').value
    headerText1.style.top = headertextTop + sctopHeader/2 + 'px'
    console.log(sctopHeader);
    let sctopHeader2 = ((sctopHeader*100)/heightHeader)
    console.log(sctopHeader2);
    if(sctopHeader2 >=  '10'){
        headerText1.style.opacity = '0'
    }
    else{
        headerText1.style.opacity = '1'
    }

})
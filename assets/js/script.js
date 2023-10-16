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

const _main = document.querySelector('.main')
const headertext1 = document.querySelector('.header-text1')
const headertext2 = document.querySelector('.header-text2')
const headertext1bottom = headertext1.computedStyleMap().get('bottom').value
const headertext2bottom = headertext2.computedStyleMap().get('bottom').value
const EarthVisual = document.querySelector('.EarthVisual')
const vidMainEarth = document.querySelector('.mainearth>video')
_main.addEventListener('scroll', () => {
    let sctopheader = _main.scrollTop
    console.log(sctopheader)

    if (sctopheader >= 500) {
        headertext1.style.bottom = headertext1bottom + sctopheader/5 + 'px'
        headertext2.style.bottom = headertext2bottom + sctopheader/10 + 'px'
        headertext1.style.display = 'none'
        headertext2.style.opacity = '1'
        headertext2.style.display = 'flex'
        if (sctopheader >= 1500) {
            headertext2.style.bottom = headertext2bottom + sctopheader/5 + 'px'
            headertext1.style.bottom = headertext1bottom + sctopheader/5 + 'px'
            headertext2.style.display = 'none'
            if(sctopheader >= 1600){
                vidMainEarth.style.width = '100%'
            }
        }
    }
    else {
        headertext1.style.bottom = headertext1bottom + sctopheader/10 + 'px'
        headertext2.style.bottom = headertext2bottom + sctopheader/10 + 'px'
        headertext1.style.display = 'flex'
        headertext2.style.display = 'none'
    }   
})

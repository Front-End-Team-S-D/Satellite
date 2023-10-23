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

const _main = document.querySelector('.main');
let _100vh = _main.clientHeight
const headertext1 = document.querySelector('.header-text1');
const headertext2 = document.querySelector('.header-text2');
const headertext1bottom = headertext1.computedStyleMap().get('bottom').value;
const headertext2bottom = headertext2.computedStyleMap().get('bottom').value;

const EarthVisual = document.querySelector('.EarthVisual');
const vidMainEarth = document.querySelector('.mainearth>video');
const MainEarth = document.querySelector('.mainearth');
const vidMainEarthwidth = vidMainEarth.computedStyleMap().get('width').value;
const EarthVisualtop = EarthVisual.computedStyleMap().get('top').value;
const EarthVisualright = EarthVisual.computedStyleMap().get('right').value;

const sparkle = document.querySelector('.sparkle-com');
const imgsparkle = document.querySelector('.sparkle-com>img');
const imgsparklewidth = imgsparkle.computedStyleMap().get('width').value;

let animationFrameId = null;
let animationStart = null;
const animationDuration = 500;

let communication = document.querySelector('.communication')
let comArticle = document.querySelector('.communication article')

_main.addEventListener('scroll', () => {
    let sctopheader = _main.scrollTop;
    // console.log(sctopheader);

    cancelAnimationFrame(animationFrameId);

    animationFrameId = requestAnimationFrame(() => {
        if (sctopheader >= 500) {
            headertext1.style.bottom = headertext1bottom + sctopheader / 5 + 'px';
            headertext2.style.bottom = headertext2bottom + sctopheader / 10 + 'px';
            headertext1.style.display = 'none';
            headertext2.style.opacity = '1';
            headertext2.style.display = 'flex';

            if (sctopheader >= 1500) {
                headertext2.style.bottom = headertext2bottom + sctopheader / 5 + 'px';
                headertext1.style.bottom = headertext1bottom + sctopheader / 5 + 'px';
                headertext2.style.display = 'none';
            }

            if (sctopheader >= 1500 && sctopheader < 4000) {
                if (!animationStart) {
                    animationStart = Date.now();
                }

                const currentTime = Date.now();
                const progress = Math.min(1, (currentTime - animationStart) / animationDuration);

                const newWidth = vidMainEarthwidth - progress * (sctopheader / 4000) * 100 + '%';
                const newTop = EarthVisualtop - progress * (sctopheader / 15.5) + '%';
                const newRight = EarthVisualright - progress * (sctopheader / 6000) + '%';
                vidMainEarth.style.width = newWidth;
                EarthVisual.style.top = newTop;
                EarthVisual.style.right = newRight;

                // communication.style.opacity = '0'

                const newWidthSparkle = imgsparklewidth - progress * (sctopheader / 4000) * 100 + '%';
                imgsparkle.style.width = newWidthSparkle;
                // sparkle.style.display = 'none';
                if (sctopheader >= 3000) {
                    sparkle.style.opacity = '1';
                }
                else{
                    sparkle.style.opacity = '0';
                }
            } else if(sctopheader < 1500){
                animationStart = null; 
                vidMainEarth.style.width = '200%';
                EarthVisual.style.top = '370%';
                EarthVisual.style.right = '50%';
                // communication.style.opacity = '0'
            }
            else if(sctopheader > 3900){
                // communication.style.opacity = '1'
                comArticle.style.position = 'fixed'
                comArticle.style.top = _100vh/12 + 'px'
                comArticle.style.right = '45px'
            }
        } else {
            headertext1.style.bottom = headertext1bottom + sctopheader / 10 + 'px';
            headertext2.style.bottom = headertext2bottom + sctopheader / 10 + 'px';
            headertext1.style.display = 'flex';
            headertext2.style.display = 'none';
        }
    });
});


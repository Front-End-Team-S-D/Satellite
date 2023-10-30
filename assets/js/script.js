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

const _scrollsec = document.querySelector('.scroll_section');
let _100vh = _scrollsec.clientHeight
const headertext1 = document.querySelector('.header-text1');
const headertext2 = document.querySelector('.header-text2');
const headertext1bottom = headertext1.computedStyleMap().get('bottom').value;
const headertext2bottom = headertext2.computedStyleMap().get('bottom').value;

const EarthVisual = document.querySelector('.EarthVisual');
const vidMainEarth = document.querySelector('.mainearth>video');
let wVidMainEarth = vidMainEarth.computedStyleMap().get('width').value

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
let comArticleright = comArticle.computedStyleMap().get('right').value
let comGallery = document.querySelector('.communication .gallery')
let tComGallery = comGallery.computedStyleMap().get('top').value

let vidCom = document.querySelector('.vid-com')
let vidComVideo = document.querySelector('.vid-com video')

let quality = document.getElementsByClassName('quality')[0]
let tQuality = quality.computedStyleMap().get('top').value

_scrollsec.addEventListener('scroll', () => {
    let sctopheader = _scrollsec.scrollTop;
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
                
                vidCom.style.width = '60%';
                vidComVideo.style.width = '100%';
                vidCom.style.top = '-55%';
                vidCom.style.right = '45%';

                communication.style.opacity = '0'

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
            }
            else if(sctopheader > 3900){
                communication.style.opacity = '1'
                comArticle.style.position = 'fixed'
                comArticle.style.top = _100vh/8 + 'px'
                comArticle.style.right = '75px'

                if(sctopheader > 6000 && sctopheader < 8800) {
                    comArticle.style.right = -520 + sctopheader/10 + 'px'
                    console.log('sctopheader : ' + sctopheader)
                    comGallery.style.opacity = '0';
                    vidMainEarth.style.width = vidMainEarthwidth - (sctopheader / 5766) * 100 + '%';
                    EarthVisual.style.right = 136 - (sctopheader / 66) + '%';
                    console.log(EarthVisual.style.top)
                    EarthVisual.style.top = 242 - (sctopheader / 44) + '%';
                    sparkle.style.opacity = '0';
                    if (sctopheader > 6500 && sctopheader < 8800) {
                        comGallery.style.opacity = (sctopheader/8600)
                        if(sctopheader > 8700 && sctopheader < 8800){
                            comArticle.style.right = '360px'
                            comArticle.style.top = '85px'
                        }
                    }
                }
                else if(sctopheader >= 8800){
                    comArticle.style.right = '360px'
                    comArticle.style.top = '85px'
                    if(sctopheader > 8900){
                        vidCom.style.opacity += (sctopheader*2)/25000 
                        vidCom.style.zIndex = 100
                        if(sctopheader > 9500){
                            comGallery.style.top = tComGallery - (sctopheader/100) + 'px'
                            if(sctopheader > 10000){
                                comGallery.style.opacity = 1 - (sctopheader/9000)
                                vidCom.style.opacity = 1 - (sctopheader/13000)
                                if(sctopheader > 10500){
                                    comArticle.style.opacity = 1 - (sctopheader/12000)
                                    if(sctopheader > 11000){
                                        vidMainEarth.style.width = '30%';
                                        vidMainEarth.style.position = 'fixed'
                                        vidMainEarth.style.transition = '4s'
                                        vidMainEarth.style.transform = 'translate(55%, 25%)'
                                        quality.style.top = tQuality - sctopheader/25 + 'px'
                                        quality.style.opacity = sctopheader/20000
                                        if(quality.style.top <= (_100vh*.6 + 'px')){
                                            quality.style.top = _100vh*.6 + 'px'
                                        }
                                    }
                                    else{
                                        quality.style.opacity = 0
                                        vidMainEarth.style.width = '47.5%';
                                        vidMainEarth.style.position = 'relative'
                                        vidMainEarth.style.transform = 'translate(0%, 0%)'
                                        vidMainEarth.style.transition = '0s'
                                        quality.style.top = tQuality - 'px'
                                    }
                                }
                                else{
                                    comArticle.style.opacity = 0 + (sctopheader/12500)
                                }
                            }
                            else{
                                comGallery.style.opacity = 0 + (sctopheader/9000)
                            }
                        }
                        else{
                            comGallery.style.top = tComGallery + 'px'
                        }
                    }
                    else{
                        vidCom.style.opacity = 0
                    }
                }
            }
        } else {
            headertext1.style.bottom = headertext1bottom + sctopheader / 10 + 'px';
            headertext2.style.bottom = headertext2bottom + sctopheader / 10 + 'px';
            headertext1.style.display = 'flex';
            headertext2.style.display = 'none';          
        }
    });
});


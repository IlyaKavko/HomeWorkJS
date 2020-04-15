let moveNum = 0;
let defualSliderSetting = {
    slideWidth: 300,
    slideHeight: '',
    maxSlide: 1,
    loop: false,
    autoplay: true,
};

let customSlider = document.querySelector('.custom_slider');
customSlider.customSlider = function (sliderSetting) {
    const slidesOffset = sliderSetting.slideWidth || defualSliderSetting.slideWidth;
    const slidesHeight = sliderSetting.slideHeight || defualSliderSetting.slideHeight;
    const maxSlide = sliderSetting.maxSlide || defualSliderSetting.maxSlide;
    const loop = sliderSetting.loop || defualSliderSetting.loop;
    const navs = sliderSetting.navs;
    const autoplay = defualSliderSetting.autoplay || sliderSetting.autoplay;
    const slide = customSlider.querySelectorAll('div');
    const totalLength = slide.length * slidesOffset;
    
    autoplayArr();
    buildSlider(slidesOffset, slidesHeight, slide);
    navsSeting();

    let outerContainer = customSlider.querySelector('.outer_container');
    outerContainer.style.width = `${slidesOffset * maxSlide}px`;

    let innerContainer = document.querySelector('.inner_container');

    let nextSlideBtn = document.querySelector('.custom_slider .next_slide');
    let prevSlideBtn = document.querySelector('.custom_slider .prev_slide');
    nextSlideBtn.addEventListener('click', nextSlideClick);
    prevSlideBtn.addEventListener('click', prevSlideClick);

    function nextSlideClick() {
        if ((moveNum - slidesOffset) > -totalLength){
            moveNum = moveNum - slidesOffset;
            innerContainer.style.transform = `translate(${moveNum}px, 0)`;
        } else if (loop == true) {
            innerContainer.addEventListener('transform', nextJump());
        }
        return;
    }

    function prevSlideClick() {
        if (moveNum < 0) {
            moveNum = moveNum + slidesOffset;
            innerContainer.style.transform = `translate(${moveNum}px, 0)`;
        } else if (loop == true) {
            innerContainer.addEventListener('transform', prevJump());
        }
        return;
    }
    
    function nextJump () {
        moveNum = 0
        innerContainer.style.transform = `translate(${moveNum}px, 0)`;
    }

    function prevJump () {
        moveNum = -totalLength + slidesOffset;
        innerContainer.style.transform = `translate(${moveNum}px, 0)`;
    }

    function navsSeting() {
        let navsData = document.querySelector('.navs');
        if (navs == true) {
            navsData.style.display = "flex";
        } else if (navs == false){
            navsData.style.display = "none"; 
        }
    }

    function autoplayArr() {
        if (autoplay == true) {
            setInterval(() => {
                nextSlideClick()
            }, 6000);
        }
    };
}

function buildSlider(slideWidth, slidesHeight, slide) {
    slide.forEach(item => {
        item.classList.add('one_slide');
        item.style.width = `${slideWidth}px`;
        item.style.height = `${slidesHeight}px`;
    })
    customSlider.innerHTML = `
   <div class="outer_container">
            <div class="inner_container">
                ${customSlider.innerHTML}
            </div>
    </div>
    <div class="navs">
        <a href="#" class="prev_slide"><</a>
        <a href="#" class="next_slide">></a>
    </div>`
}

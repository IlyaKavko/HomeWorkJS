let moveNum = 0;
let defualMoveNum = 0;
let defualSlidesOffset = 330;
let slideItem = 300;

let customSlider = document.querySelector('.custom_slider');
customSlider.customSlider = function (sliderSetting) {
    const slidesOffset = sliderSetting.slideWidth;
    const maxSlide = sliderSetting.maxSlide;

    buildSlider();
    maxSlideInWindow();

    let nextSlideBtn = document.querySelector('.custom_slider .next_slide');
    let prevSlideBtn = document.querySelector('.custom_slider .prev_slide');
    nextSlideBtn.addEventListener('click', nextSlideClick);
    prevSlideBtn.addEventListener('click', prevSlideClick);

    function nextSlideClick() {
        moveNum = moveNum - slidesOffset;
        defualMoveNum = defualMoveNum - defualSlidesOffset;
        let customSlider = this.closest('.custom_slider');
        let innerContainer = document.querySelector('.inner_container');
        if (moveNum) {
            innerContainer.style.transform = `translate(${moveNum}px, 0)`;
        } else {
            innerContainer.style.transform = `translate(${defualMoveNum}px, 0)`;
        }
    }

    function prevSlideClick() {
        moveNum = moveNum + slidesOffset;
        defualMoveNum = defualMoveNum + defualSlidesOffset;
        let customSlider = this.closest('.custom_slider');
        let innerContainer = document.querySelector('.inner_container');
        if (moveNum) {
            innerContainer.style.transform = `translate(${moveNum}px, 0)`;
        } else {
            innerContainer.style.transform = `translate(${defualMoveNum}px, 0)`;
        }
    }

    function maxSlideInWindow() {
        slideItem = slideItem * maxSlide
        let outerContainer = document.querySelector('.outer_container')
        outerContainer.style.width = `${slideItem}px`;
    }
}

function buildSlider() {
    let oneSlideArr = customSlider.querySelectorAll('div');
    oneSlideArr.forEach(item => item.classList.add('one_slide'))
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
 function sliders(
    slidesSel,
    dir,
    prevSel = false,
    nextSel = false,
 ) {
    const slides = document.querySelectorAll(slidesSel),
          prev = document.querySelector(prevSel),
          next = document.querySelector(nextSel);
    let indexSlide = 1;

    ShowSlideBy(indexSlide);

    function ShowSlideBy(n) {
        if(n > slides.length) {
            n = 1;
        }   
        if (n<1) {
            n = slides.length;
        }

        slides.forEach((slide)=> {
            slide.classList.add('animated');
            slide.style.display = 'none';
        });

        slides[n-1].style.display = 'block';
        indexSlide = n;
    }

    function nextSlide() {
        ShowSlideBy(indexSlide + 1);
        if (dir == 'vertical') {
            slides[indexSlide-1].classList.remove('fadeOutLeft');
            slides[indexSlide-1].classList.add('fadeInLeft');

            
        } else {
            slides[indexSlide-1].classList.remove('slideInLeft');
            slides[indexSlide-1].classList.add('slideInRight');
        }
    }

    function prevSlide() {
        ShowSlideBy(indexSlide - 1);
        if (dir == 'vertical') {
            slides[indexSlide-1].classList.remove('fadeOutLeft');
            slides[indexSlide-1].classList.add('fadeInLeft');
        } else {
            slides[indexSlide-1].classList.remove('slideInRight');
            slides[indexSlide-1].classList.add('slideInLeft');
        }
    }

    try {
        prev.addEventListener('click', ()=> {
            prevSlide();
        });
        next.addEventListener('click', ()=> {
            nextSlide();
        });
    } catch(e){

    }
    let timerSlider = setInterval(nextSlide, 3000);
    
    slides[0].parentNode.addEventListener('mouseenter', ()=>{
        clearInterval(timerSlider);
    });

    slides[0].parentNode.addEventListener('mouseleave', ()=>{
        timerSlider = setInterval(nextSlide, 3000);
    });

    if(dir == 'vertical') {

    }
 }

 export default sliders;
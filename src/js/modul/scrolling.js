const  scrolling = () => {
   const  hashTrigers = document.querySelectorAll('[href^="#"]'),
          element  = document.documentElement,
          scrollUp = document.querySelector('[href="#up"]');

    hashTrigers.forEach(triger => {
        triger.addEventListener('click', function(e){
            if (this.hash != '') {
                e.preventDefault();
                requestAnimationFrame(smoothScrollAnimation);
            }
            const startScrollTop =  Math.round(document.body.scrollTop || element.scrollTop);
            const hashElemTop = Math.round(document.querySelector(this.hash).getBoundingClientRect().top);
            const duration = 1000; //miliseconds
            let startDate;

            
            function smoothScrollAnimation(time) {
                    if(!startDate) {
                        startDate = time;
                    }
                    const lineProgress = (time - startDate)/duration;
                    const progress = lineProgress**3+3*lineProgress**2*(1-lineProgress);
                    // const r  = Math.round(hashElemTop > 0 ? Math.min(startScrollTop + progress*speed, startScrollTop + hashElemTop) 
                    //            : Math.max(startScrollTop - progress*speed, startScrollTop + hashElemTop));

                    const r = Math.round(startScrollTop + hashElemTop*progress);
                    element.scrollTo(0, r);
                    
                    if(lineProgress <= 1) {
                        requestAnimationFrame(smoothScrollAnimation);
                        
                    } else {
                        location.hash = triger.hash;
                    }
            }
            
        });
    });

    window.addEventListener('scroll', function(e) {
        if (element.scrollTop > 1650) {
            scrollUp.classList.add('animated', 'fadeIn');
            scrollUp.classList.remove('fadeOut');
    
        } else {
            scrollUp.classList.add('fadeOut');
            scrollUp.classList.remove('fadeIn');
        }
    });

    // for older browsers
  

//    scrollUp.addEventListener('click', function(e){
//             if (this.hash != '') {
//                 e.preventDefault();
//                const hashElemTop = calcTopElem(document.querySelector(this.hash)),
//                      startElementTop =  Math.round(document.body.scrollTop || element.scrollTop);
//                 smoothScroll(hashElemTop, startElementTop, this );

//             }

//             function calcTopElem(elem) {
//                 let elemTop = 0,
//                     curentElem =  elem;
//                 while(curentElem.offsetParent) {
//                     elemTop =+ curentElem.offsetTop;
//                     curentElem = curentElem.offsetParent;
//                 }
//                 return elemTop;
//            }
//            function smoothScroll(to, from, elem) {
//                const interval = 1;
//                let speed,
//                     top = from;

//                if (to > from) {
//                    speed = 30;
//                } else {
//                    speed = -30;
//                }
//                const scrollTimer = setInterval(() => {
//                    console.log(top, to, from);
//                 if ((top==to)||(to > from && top >= to)||(to < from && top <= to)){
//                     clearInterval(scrollTimer);
//                     history.replaceState(history.state, document.title, location.href.replace(/#.*$/g, '') + elem.hash );

//                 } else {
//                     document.body.scrollTop = top + speed;
//                     element.scrollTop = top + speed;  
//                     top +=speed;
//                 }
//                }, interval);
//            }

//    });
   


};


export default scrolling;
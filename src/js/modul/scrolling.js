const  scrolling = (triggerSelector,elementSelector,upHidden=false) => {
   const  element  = document.documentElement,
          scrollUp = triggerSelector.tagName? triggerSelector: document.querySelector(triggerSelector);

    if(upHidden){
        scrollUp.style.opacity = '0';
        scrollUp.style.transition = 'opacity 1s';
        
        window.addEventListener('scroll', function(e) {
            if (element.scrollTop > 1650) { //1650 Высота где появляется тригер
                scrollUp.style.opacity = '1';
    
            } else {
                scrollUp.style.opacity = '0';
        }
        });
    }
    
    
    
    

    scrollUp.addEventListener('click', function(e){
            if (typeof(elementSelector)== 'string') {
                e.preventDefault();
                requestAnimationFrame(smoothScrollAnimation);
            }
            const startScrollTop =  Math.round(document.body.scrollTop || element.scrollTop);
            const elemTop = Math.round(document.querySelector(elementSelector).getBoundingClientRect().top);
            const duration = 1000; //miliseconds
            let startDate;

            //Всю анимацию можно заменить просто на element.scrollTo(0, elemTop), 
            //тогда страничка просто прыгнет до нужного места
            function smoothScrollAnimation(time) {
                    if(!startDate) {
                        startDate = time;
                    }
                    const lineProgress = (time - startDate)/duration;
                    const progress = lineProgress**3+3*lineProgress**2*(1-lineProgress);
                    // const r  = Math.round(elemTop > 0 ? Math.min(startScrollTop + progress*speed, startScrollTop + elemTop) 
                    //            : Math.max(startScrollTop - progress*speed, startScrollTop + elemTop));

                    const r = Math.round(startScrollTop + elemTop*progress);
                    element.scrollTo(0, r);
                    
                    if(lineProgress <= 1) {
                        requestAnimationFrame(smoothScrollAnimation);
                        
                    } 
            }
            
        
    });

   
};


export default scrolling;
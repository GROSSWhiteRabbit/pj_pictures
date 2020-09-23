const filter = (trigersSelector, contentsSelector,noneElementSelector, activeClass  )=>{
    const trigers = document.querySelectorAll(trigersSelector),
          contents =document.querySelectorAll(contentsSelector),
          portfolioNo = document.querySelector(noneElementSelector);
    let timerPortfolioNo;
    

    contents.forEach(block=> {
        // block.classList.add('animated');
        block.style.transition = 'all .5s';
    });

    trigers.forEach(triger => {
        triger.addEventListener('click', ()=> {
            setActiveClass(triger);
            filtersContentByTriger(triger); 
        });
    });

    function setActiveClass(triger){
        trigers.forEach(child => {
            child.classList.remove(activeClass);
            });
        triger.classList.add(activeClass);
    }

    
    function filtersContentByTriger(triger) {
        let someElemet;
            

        contents.forEach(block => {
                if (checkClasesInblock(block)) {
                    // block.classList.remove('zoomOut');
                    // block.classList.add('zoomIn');
                    // block.style.display = 'block';
                    block.style.width = '20%';
                    
                    block.style.opacity = '1';
                    block.style.padding = '0.5rem';
                    someElemet = true;
                } else {
                    // block.classList.remove('zoomIn');
                    // block.classList.add('zoomOut');
                    block.style.width = '0%';
                    block.style.opacity = '0';
                    block.style.padding = '0rem';
                    // setTimeout(()=>{
                        
                    //     block.style.display = 'none';
    
                    //     },1000);
                }



        });

        if (!someElemet) {
            clearTimeout(timerPortfolioNo);
            portfolioNo.style.display = 'block';
            portfolioNo.parentNode.classList.remove('animated', 'zoomOut');
            portfolioNo.parentNode.classList.add('animated', 'zoomIn');
        } else {
            clearTimeout(timerPortfolioNo);

            portfolioNo.parentNode.classList.remove('animated', 'zoomIn');
            portfolioNo.parentNode.classList.add('animated', 'zoomOut');
            timerPortfolioNo = setTimeout(()=> {
                portfolioNo.style.display = '';
            },500);
        }

        function checkClasesInblock(block){ 
            for(let clas of triger.classList){
                if(block.classList.contains(clas)){
                    return true;
                }
            }
            return false;
        }
    }
};

export default filter;
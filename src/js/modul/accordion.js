const accordion = (triggersSelector)=>{
    const btns = document.querySelectorAll(triggersSelector);
        //  blocks = document.querySelectorAll('.accordion-block');


    btns.forEach(btn=>{
        btn.addEventListener('click', function(){
            this.classList.toggle('active');
            this.nextElementSibling.classList.toggle('active-content');
            if(this.classList.contains('active')) {
                this.nextElementSibling.style.maxHeight =  this.nextElementSibling.scrollHeight + 80 +'px';
            } else {
                this.nextElementSibling.style.maxHeight = '0px';
            }
        });
    });


         

    // blocks.forEach(block=> {
    //     block.classList.add('animated', 'zoomIn');
    // });

    // btns.forEach((btn, i)=> {
    //     btn.addEventListener('click', ()=> {
    //         if(!btn.classList.contains('active')) {
    //             btns.forEach((btn, i)=> {
    //                 btn.classList.remove('active');
    //             });
    //         btn.classList.add('active');
    //         } else {
    //             btns.forEach((btn, i)=> {
    //                 btn.classList.remove('active');
    //             });
    //         }
    //     });
    // });
};

export default accordion;
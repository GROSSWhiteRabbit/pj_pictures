
let timerModal,
    timerWorked = false,
    btnPressed;
setTimer();

function closeModal(Modal) {
    if(typeof(Modal)== 'string'){      
        Modal = document.querySelector(Modal);
    }

    Modal.classList.remove('show');
    Modal.classList.add('hide');
    document.body.classList.remove('modal-open');
    document.body.style.marginRight = '';


    
}


function showModal(Modal) {
    if(typeof(Modal)== 'string'){      
        Modal = document.querySelector(Modal);
    }   

    closeAllModal();

    Modal.classList.remove('hide');
    Modal.classList.add('show');
    document.body.style.marginRight = `${window.innerWidth - document.body.clientWidth}px`;
    document.body.classList.add('modal-open');
    
    clearInterval(timerModal);
    btnPressed = true;

    

}

function closeAllModal(){
    const windows = document.querySelectorAll('[data-modal]');
    windows.forEach(window=> {
        closeModal(window);
        window.classList.add('animated', 'fadeIn');
    });
}

function setTimer(){
    if(!timerWorked) {
        timerModal = setTimeout(() => {
            showModal('.popup-consultation', timerModal);
            timerWorked = true;
        }, 60000);
    }

}

const modals = ()=> {



    function bindModal(selectorModal, selectorTriggers, selecttorClose, destroy = false, openByEndScroll = false, requiredInputSeklector = false){

        const elModal = document.querySelector(selectorModal),
                triggers = document.querySelectorAll(selectorTriggers),
                close = document.querySelector(selecttorClose);
        let requiredInput = [{value: true}];
        if (requiredInputSeklector) {
            requiredInput = document.querySelectorAll(requiredInputSeklector);
        }

        function checkValue(elem){
            let check;
            elem.forEach((input)=>{
            if( input.value){
                check = true;

            } else { 
                check = false;
                input.style.border = '1px solid red';
            }
            });
            return check;
        }
                
                
        triggers.forEach((trigger)=> {
            trigger.addEventListener('click', (e)=> {
                if(e.target && checkValue(requiredInput) ) {

                    e.preventDefault();
                    showModal(selectorModal);
                    if (destroy){
                        triggers.forEach((trigger)=> {
                            
                            trigger.remove();
                        });
                    }

                }
                

            });
        });

        close.addEventListener('click', function(e) {
            if(e.target) {
                e.preventDefault();
                console.log('ok');
                closeModal(selectorModal);
                setTimer();
            }
        });



        elModal.addEventListener('click', (e)=> {
            if(e.target === elModal) {
                closeModal(selectorModal);
                setTimer();
            }
        });

        

        document.addEventListener('keyup',  (event)=> {
            if(event.key == 'Escape') {
                closeModal(selectorModal);
                
            }
        });


        if (openByEndScroll) {
            window.addEventListener('scroll', ()=> {
                if(!btnPressed &&
                (window.pageYOffset + document.documentElement.clientHeight >=
                document.documentElement.offsetHeight)){
        
                    showModal(selectorModal);
                    if (destroy){
                        triggers.forEach((trigger)=> {
                            trigger.remove();
                        });
                    }
                    
                }
            });
        }

    }



bindModal('.popup-design', '.button-design', '.popup-design .popup-close');
bindModal('.popup-consultation', '.button-consultation', '.popup-consultation .popup-close');
bindModal('.popup-gift', '.fixed-gift', '.popup-gift .popup-close', true, true);



};

export default  modals;

export {closeAllModal};



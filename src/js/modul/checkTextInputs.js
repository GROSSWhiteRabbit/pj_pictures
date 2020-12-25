const  checkTextInputs= (select) => {
    const inputs = document.querySelectorAll(select);
    inputs.forEach((input)=> {
        
        input.addEventListener('keypress', (e)=>{
            if (e.key.match(/[^а-яё 0-9]/ig)){
                e.preventDefault();
            }
            
        });
        input.addEventListener('input', (e)=>{
            input.value = input.value.replace(/[^а-яё 0-9]/ig, '');
             
        });
    });

};

export default checkTextInputs;


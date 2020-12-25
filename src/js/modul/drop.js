const drop = () => {





 const inputs = document.querySelectorAll('[name="upload"');

    ['dragenter', 'dragleave', 'dragover', 'drop', 'drag'].forEach(nameEvent => {
        inputs.forEach(input=> {
            input.addEventListener(nameEvent, preventDefault, false);
        });
    });

    function preventDefault(e){
        e.preventDefault();
        e.stopPropagation ();
    }
    
    ['dragenter', 'dragover', 'drag'].forEach(nameEvent => {
        inputs.forEach(input=> {
            input.addEventListener(nameEvent, ()=> highLight(input), false);
        });
    });
    
    function highLight(item) {
        item.parentNode.style.border = '5px solid #c51abb';
        item.parentNode.style.backgroundColor = 'rgba(178, 80, 188, 0.8)';

    }

    [ 'dragleave', 'drop'].forEach(nameEvent => {
        inputs.forEach(input=> {
            input.addEventListener(nameEvent, ()=> unHighLight(input), false);
        });
    });

    function unHighLight(item) {
        item.parentNode.style.border = '';
        item.parentNode.style.backgroundColor = '';

    }

    inputs.forEach(input=> {
        input.addEventListener('drop', (e)=> {

            input.files = e.dataTransfer.files;
            let  name = input.files[0].name;
                if(name.length > 9) {
                  name = name.replace(/(?<=\w{7})\w+/ig, '..') ;
                }
                input.previousElementSibling.textContent = name;
        }, false);
    });
    

};

export default drop;
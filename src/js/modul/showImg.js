const showImg =  () => {
    const bloks = document.querySelectorAll('.sizes-block');

    bloks.forEach(blok => {
        blok.addEventListener('mouseenter', function(){
            this.children.forEach((elem, i) => {
                if(elem.tagName == "IMG") {
                    elem.src =  elem.src.replace(/.png/i, '-1.png');
                } else if(!elem.classList.contains('sizes-hit')) {
                    elem.style.display = 'none';
                }
            });
        });

        blok.addEventListener('mouseleave', function(){
            this.children.forEach((elem, i) => {
                if(elem.tagName == "IMG") {
                    elem.src =  elem.src.replace(/-1.png/i, '.png');
                } else {
                    elem.style.display = '';
                }
            });
        });
    });

};

export default showImg;
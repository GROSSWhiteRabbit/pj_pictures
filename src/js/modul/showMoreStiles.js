import {getData} from '../services/requests';

const showMoreStiles = (trigerSelect,)=>{
    // const btn = document.querySelector(trigerSelect),
    //     elems = document.querySelectorAll(elemsSelect);

    //     btn.addEventListener('click', ()=> {
    //         btn.style.display = 'none';
    //         elems.forEach(elem => {
    //             elem.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs', 'styles-2');
    //             elem.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1', 'animated', 'fadeInDown');
                
                
                
    //         });
    //     });



    // GET CARt from server

    class Cart {
        constructor(srcImg, title, link, parentSelector) {
            this.srcImg = srcImg;
            this.title = title;
            this.link = link;
            this.parent = document.querySelector(parentSelector);
        }

        render(){
            this.parent.insertAdjacentHTML("beforeend", `
            <div class="col-sm-3 col-sm-offset-0 col-xs-10 col-xs-offset-1 animated fadeInUp">
					<div class=styles-block>
						<img src=${this.srcImg} alt>
						<h4>${this.title}</h4>
						<a href="${this.link}">Подробнее</a>
					</div>
				</div>
            `);
        }
    }

    const btn = document.querySelector(trigerSelect);

    btn.addEventListener('click', ()=> {
        getData('assets/db.json')
        .then(res => {
            res.styles.forEach(({src, title, link}) => {
                new Cart(src, title, link, '.styles .row').render();
            });
            btn.style.display = 'none';
        }).catch(e=> {
            console.error(e);
        });
        
        
    });

    


};

export default showMoreStiles;
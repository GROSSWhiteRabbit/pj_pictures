import {getData} from '../services/requests';


const calc = (sizeSelect, materialSelect, optionsSelect, resultSelect, promocodeSelect, formSelect)=> {
    const size = document.querySelector(sizeSelect),
        material = document.querySelector(materialSelect),
        options = document.querySelector(optionsSelect),
        result = document.querySelector(resultSelect),
        form = document.querySelector(formSelect),
        promoCode = document.querySelector(promocodeSelect);
    let sizeValue,
        materialValue,
        optionsValue;

    getData('assets/db.json')
    .then(res=> {
        let {size:sizeValue, material: materialValue, options: optionsValue} = res.form;


        setValueInOptions(size, sizeValue);
        setValueInOptions(material, materialValue);
        setValueInOptions(options, optionsValue);


        function setValueInOptions(selectElem, valueObj){
            selectElem.children.forEach((option)=>{
                for( let key in valueObj){

                    if (key == option.textContent){
                        option.value = valueObj[key];
                    }
                }
            });
        }
    })
    .catch((e)=>{
        console.error(e);
    });



    form.addEventListener('input', ()=> {
        if(checkRequiredValue ()) {
            result.textContent = calcResult()*promoCodeFactor() + ' RUB';
        }
    });

    function checkRequiredValue (){

        
        size.style.border = '';
        material.style.border = '';
        size.style.boxShadow = '';
        material.style.boxShadow = '';
        

        if (!size.value || !material.value ) {
            if (!size.value) {
                size.style.boxShadow = '0 -2px 10px rgba(255, 0, 0, 0.8)';
                size.style.border = '1px solid red';
            } 
            if (!material.value) {
                material.style.boxShadow = '0 -2px 10px rgba(255, 0, 0, 0.8)';
                material.style.border = '1px solid red';
            }
            result.textContent = 'Для расчета нужно выбрать размер картины и материал картины';

            return false;
        }

        return true;
    }
    
    function promoCodeFactor(){
        if(promoCode.value.match(/IWANTPOPART/i)) {
            return 0.7;
        }
        return 1;
    }


    function calcResult() {
        if(!options.value) {
            return Math.round(+size.value*+material.value);
        } else {
            return Math.round((+size.value*+material.value + +options.value));
        }
        
        

    }
};


export default calc;